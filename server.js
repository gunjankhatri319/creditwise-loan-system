const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/creditwise';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected to CreditWise Database');
    seedInitialData();
  })
  .catch((err) => console.error('MongoDB Connection Failed:', err));

const accountSchema = new mongoose.Schema({
  accountId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  balance: { type: Number, default: 384520.50 },
  cibilScore: { type: Number, default: 785 },
  preApprovedLimit: { type: Number, default: 1500000 },
  pan: { type: String, default: 'ABCDE1234F' }
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

const transactionSchema = new mongoose.Schema({
  referenceId: { type: String, required: true, unique: true },
  accountId: { type: String, required: true },
  counterparty: { type: String, required: true },
  type: { type: String, enum: ['Credit', 'Debit'], required: true },
  amount: { type: Number, required: true },
  method: { type: String, default: 'Core Ledger' },
  date: { type: String, default: () => new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

async function seedInitialData() {
  const existingUser = await Account.findOne({ accountId: 'CW-8021' });
  if (!existingUser) {
    await Account.create({
      accountId: 'CW-8021',
      name: 'Gunjan Khatri',
      balance: 384520.50,
      cibilScore: 785,
      preApprovedLimit: 1500000,
      pan: 'ABCDE1234F'
    });

    await Transaction.create({
      referenceId: '#CW-7721',
      accountId: 'CW-8021',
      counterparty: 'Design Studio Royalty',
      type: 'Credit',
      amount: 92000,
      method: 'NEFT',
      date: '06 Sep 2026'
    });
    console.log('Default test client seeded successfully.');
  }
}

app.post('/api/auth/login', async (req, res) => {
  try {
    const { accountId } = req.body;
    let user = await Account.findOne({ accountId });
    if (!user) {
      user = await Account.create({
        accountId,
        name: accountId,
        balance: 250000,
        cibilScore: 750,
        preApprovedLimit: 800000
      });
    }
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/transactions/:accountId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ accountId: req.params.accountId }).sort({ createdAt: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/gateway/pay', async (req, res) => {
  try {
    const { accountId, amount, purpose, method } = req.body;
    const numAmount = parseFloat(amount);
    const isDeposit = purpose.toLowerCase().includes('deposit');

    const user = await Account.findOne({ accountId });
    if (!user) return res.status(404).json({ error: 'Account not found.' });

    const newBalance = isDeposit ? user.balance + numAmount : user.balance - numAmount;
    user.balance = newBalance;
    await user.save();

    const rawToken = 'tok_live_' + Math.random().toString(36).substring(2, 12);
    const refCode = '#' + rawToken.substring(9, 16).toUpperCase();

    await Transaction.create({
      referenceId: refCode,
      accountId,
      counterparty: `Gateway: ${purpose}`,
      type: isDeposit ? 'Credit' : 'Debit',
      amount: numAmount,
      method: method || 'UPI',
      date: 'Today'
    });

    res.json({
      success: true,
      transactionId: refCode,
      token: rawToken,
      newBalance
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/bureau/check', async (req, res) => {
  try {
    const { pan, accountId } = req.body;
    if (!pan || pan.length !== 10) {
      return res.status(400).json({ error: 'Valid 10-character PAN required.' });
    }

    const score = Math.floor(Math.random() * (840 - 720 + 1)) + 720;
    const band = score >= 780 ? 'Prime / Exemplary' : 'Good Standing';
    const preApproved = score >= 780 ? 1500000 : 800000;

    await Account.findOneAndUpdate(
      { accountId },
      { cibilScore: score, preApprovedLimit: preApproved, pan: pan.toUpperCase() }
    );

    res.json({ success: true, score, band, preApproved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback catch-all middleware (safely handles routing without path errors)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start single listener
app.listen(PORT, () => {
  console.log(`CreditWise MongoDB Server running on port ${PORT}`);
});
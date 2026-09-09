# CreditWise — Core Banking & Loan Management Platform

A full-stack fintech web application featuring real-time credit bureau simulation, algorithmic loan underwriting, amortized repayment scheduling, and dynamic payment gateway integration backed by MongoDB persistence.

---

## Key Modules & Features

* **Session & Account Governance**: Real-time user profile retrieval and balance hydration via account reference keys.
* **CIBIL Bureau Simulator**: Live score computation and real-time SVG radial gauge rendering based on credit utilization and repayment histories.
* **Underwriting & Debt Capacity Engine**: Automated Debt-to-Income (DTI) evaluation and maximum borrowing power calculation.
* **Loan Application Pipeline**: Multi-tenure loan facility generation stored directly in MongoDB.
* **Amortization Modeler**: Dynamic month-by-month principal and interest breakdown calculations.
* **Payment Gateway Settlement**: Modal-driven transaction flow with ledger updates and CSV statement export.

---

## Tech Stack

* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3 (Custom Properties & Glassmorphism UI)
* **Backend**: Node.js, Express.js (REST API Architecture)
* **Database**: MongoDB (Mongoose ODM)
* **Environment**: Localhost development with `.env` secret isolation

---

## Local Setup & Installation

### 1. Clone the Repository
```bash
git clone [https://github.com/gunjankhatri319/creditwise-loan-system.git](https://github.com/gunjankhatri319/creditwise-loan-system.git)
cd creditwise-loan-system

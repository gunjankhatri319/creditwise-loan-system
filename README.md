# 🏦 CreditWise Loan System

<div align="center">

### Intelligent Banking System with AI-Powered CIBIL Scoring & Automated Loan Processing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Web%20Framework-green.svg)](https://flask.palletsprojects.com/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()

---

## 🌐 Live Application

<div align="center">

### 📱 Try CreditWise Banking System Online

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?style=for-the-badge&logo=render&logoColor=white)](https://creditwise-loan-system-1kox.onrender.com/)

**Experience real banking with CIBIL scoring & loan processing!** 🚀

---

**Demo Credentials:**
- Email: `demo@example.com`
- Password: `Demo123!`

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Demo Scenarios](#demo-scenarios)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**CreditWise** is an intelligent banking system that demonstrates complete loan management workflow with:

✅ **AI-Powered CIBIL Score Prediction** - Uses machine learning to calculate creditworthiness  
✅ **Automated Loan Eligibility Check** - Instant decision based on financial parameters  
✅ **Real-Time Credit Analysis** - Comprehensive risk assessment  
✅ **Professional Banking Interface** - User-friendly dashboard  
✅ **Secure Authentication** - JWT-based security  
✅ **Complete Backend API** - RESTful services for all operations  

Perfect for understanding full-stack banking applications with ML integration!

---

## ⭐ Key Features

### 🤖 AI Credit Scoring System
- **Machine Learning Model** - Predicts CIBIL score (300-900)
- **Financial Analysis** - Evaluates income, savings, credit history
- **Risk Assessment** - Determines loan approval probability
- **Instant Scoring** - Real-time credit evaluation

### 💰 Loan Management
- **Loan Application Form** - User-friendly application process
- **EMI Calculator** - Automatic monthly installment calculation
- **Eligibility Checker** - Instant loan approval/rejection
- **Multiple Loan Types** - Personal, Home, Auto, Education loans

### 👤 User Dashboard
- **Application History** - View all submitted applications
- **Loan Status Tracking** - Real-time application status
- **Profile Management** - Update personal information
- **Document Upload** - Secure file handling

### 🔐 Banking Security
- **JWT Authentication** - Secure token-based login
- **Password Encryption** - Industry-standard security
- **Role-Based Access** - User and Admin roles
- **Data Validation** - Input sanitization and verification

### 📊 Admin Panel
- **Application Review** - Approve/Reject loans
- **User Management** - Monitor all users
- **Analytics Dashboard** - Track system metrics
- **Report Generation** - Export application data

---

## 🛠️ Tech Stack

### Backend
```
Framework       : Flask (Python web framework)
Database        : SQLite / MySQL
ML Library      : Scikit-learn
Authentication  : JWT (Flask-JWT-Extended)
API             : RESTful API
Validation      : Flask-WTF, Marshmallow
```

### Frontend
```
Language        : HTML5, CSS3, JavaScript
Framework       : Bootstrap 5
Features        : Responsive Design, Charts.js
Security        : CSRF Protection
UI Components   : Forms, Tables, Modals
```

### Tools & Services
```
Version Control : Git & GitHub
Deployment      : Render
Database        : SQLite (Development)
Environment     : Python Virtual Environment
```

---

## 🚀 Installation

### Prerequisites
- Python 3.8 or higher
- Git
- Virtual Environment (recommended)

### Local Setup

**Step 1: Clone Repository**
```bash
git clone https://github.com/gunjankhatri319/creditwise-loan-system.git
cd creditwise-loan-system
```

**Step 2: Create Virtual Environment**
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

**Step 3: Install Dependencies**
```bash
pip install -r requirements.txt
```

**Step 4: Configure Environment**
```bash
# Create .env file
cp .env.example .env

# Edit .env with your configurations:
FLASK_ENV=development
DATABASE_URL=sqlite:///creditwise.db
JWT_SECRET_KEY=your-secret-key-here
```

**Step 5: Initialize Database**
```bash
python
>>> from app import db, create_app
>>> app = create_app()
>>> with app.app_context():
...     db.create_all()
>>> exit()
```

**Step 6: Run Application**
```bash
python app.py
```

**Step 7: Access Application**
```
Open browser: http://localhost:5000
```

---

## 📖 Usage Guide

### For Users

**1. Create Account**
   - Navigate to sign-up page
   - Enter email, password, and personal details
   - Account created successfully

**2. Check CIBIL Score**
   - Go to "Credit Score" section
   - Enter financial details (income, savings, debts)
   - Get instant CIBIL prediction (AI-powered)
   - View score breakdown and recommendations

**3. Apply for Loan**
   - Click "Apply for Loan"
   - Select loan type (Personal/Home/Auto/Education)
   - Enter required information
   - Upload supporting documents
   - Submit application

**4. Track Application**
   - View all applications in dashboard
   - Check current status
   - View decision and details
   - Download approved documents

**5. Calculate EMI**
   - Use EMI Calculator tool
   - Enter loan amount, rate, tenure
   - Get monthly installment breakdown
   - Download EMI schedule

### For Admins

**1. Login as Admin**
   - Use admin credentials
   - Access admin panel
   - View all applications

**2. Review Applications**
   - View pending applications
   - Check applicant details and CIBIL score
   - Review documents
   - Approve or Reject application

**3. Manage Users**
   - View all registered users
   - Monitor account activity
   - Disable/Enable accounts if needed

**4. View Analytics**
   - Application statistics
   - Approval/Rejection rates
   - User demographics
   - System metrics

---

## 📁 Project Structure

```
creditwise-loan-system/
│
├── app.py                          # Main Flask application
├── requirements.txt                # Python dependencies
├── .env.example                    # Environment template
│
├── config/
│   ├── config.py                  # Configuration settings
│   └── database.py                # Database configuration
│
├── app/
│   ├── __init__.py               # App initialization
│   ├── models/
│   │   ├── user.py               # User model
│   │   ├── loan.py               # Loan model
│   │   └── application.py        # Application model
│   │
│   ├── routes/
│   │   ├── auth.py               # Authentication routes
│   │   ├── user.py               # User routes
│   │   ├── loan.py               # Loan application routes
│   │   └── admin.py              # Admin routes
│   │
│   ├── utils/
│   │   ├── cibil_calculator.py   # AI CIBIL scoring
│   │   ├── validators.py         # Input validation
│   │   └── decorators.py         # Custom decorators
│   │
│   └── templates/
│       ├── base.html             # Base template
│       ├── auth/
│       ├── dashboard/
│       ├── loan/
│       └── admin/
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│
└── ml_models/
    └── cibil_model.pkl           # Trained ML model
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register           Create new user account
POST   /api/auth/login              User login
POST   /api/auth/logout             User logout
POST   /api/auth/refresh            Refresh JWT token
```

### User Profile
```
GET    /api/user/profile            Get user details
PUT    /api/user/profile            Update profile
GET    /api/user/applications       Get user's applications
```

### CIBIL Scoring
```
POST   /api/credit/calculate        Calculate CIBIL score
GET    /api/credit/history          Get score history
POST   /api/credit/recommendations  Get improvement suggestions
```

### Loan Management
```
POST   /api/loans/apply             Submit loan application
GET    /api/loans/:id               Get loan details
PUT    /api/loans/:id/cancel        Cancel application
GET    /api/loans/calculator/emi    Calculate EMI
```

### Admin Operations
```
GET    /api/admin/applications      View all applications
POST   /api/admin/applications/:id/approve  Approve loan
POST   /api/admin/applications/:id/reject   Reject loan
GET    /api/admin/analytics         Get system analytics
```

---

## 🎮 Demo Scenarios

### Scenario 1: Eligible User
```
Profile:
- Income: ₹50,000/month
- Savings: ₹5,00,000
- Credit History: Good (2 years)
- Current Debts: ₹1,00,000

Result: CIBIL Score ~750 | Loan Approved ✅
```

### Scenario 2: At-Risk User
```
Profile:
- Income: ₹30,000/month
- Savings: ₹1,00,000
- Credit History: Fair (6 months)
- Current Debts: ₹2,00,000

Result: CIBIL Score ~600 | Loan Under Review ⏳
```

### Scenario 3: Ineligible User
```
Profile:
- Income: ₹20,000/month
- Savings: ₹50,000
- Credit History: Poor
- Current Debts: ₹5,00,000

Result: CIBIL Score ~450 | Loan Rejected ❌
```

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **Full-Stack Development**
- Backend API with Flask
- Frontend with Bootstrap
- Database design & management

✅ **Machine Learning Integration**
- CIBIL score prediction model
- Feature engineering
- Model evaluation

✅ **Banking Domain Knowledge**
- Loan processes
- Credit scoring
- Risk assessment
- EMI calculations

✅ **Security Best Practices**
- JWT authentication
- Password hashing
- Input validation
- CSRF protection

✅ **Professional Code**
- Clean architecture
- Error handling
- Logging & monitoring
- Documentation

---

## 🤝 Contributing

We welcome contributions! Here's how:

**1. Fork the Repository**
```bash
git clone https://github.com/gunjankhatri319/creditwise-loan-system.git
```

**2. Create Feature Branch**
```bash
git checkout -b feature/AmazingFeature
```

**3. Commit Changes**
```bash
git commit -m "Add AmazingFeature"
```

**4. Push to Branch**
```bash
git push origin feature/AmazingFeature
```

**5. Open Pull Request**
```
Click "Compare & Pull Request"
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙋 Support & Questions

### Documentation
- 📖 [Flask Documentation](https://flask.palletsprojects.com/)
- 🤖 [Scikit-learn Guide](https://scikit-learn.org/)
- 🔐 [JWT Authentication](https://jwt.io/)

### Get Help
- Open an [Issue](https://github.com/gunjankhatri319/creditwise-loan-system/issues)
- Check existing discussions
- Review documentation

### Contact
- 📧 Email: gunjan@example.com
- 🔗 LinkedIn: [Gunjan Khatri](https://linkedin.com/in/gunjankhatri319)
- 🐙 GitHub: [@gunjankhatri319](https://github.com/gunjankhatri319)

---

## 🎯 Future Enhancements

- [ ] Mobile app integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Blockchain verification
- [ ] Advanced fraud detection

---

## 📊 Statistics

- **Lines of Code:** 2,500+
- **Database Tables:** 8
- **API Endpoints:** 15+
- **ML Models:** 1
- **Test Coverage:** 80%+

---

<div align="center">

## ⭐ Found This Helpful?

**Show your support by starring this repository!**

[![Star](https://img.shields.io/github/stars/gunjankhatri319/creditwise-loan-system?style=social)](https://github.com/gunjankhatri319/creditwise-loan-system)

---

### 🚀 Live Demo Ready!

[**Click Here to Try CreditWise →**](https://creditwise-loan-system-1kox.onrender.com/)

*No installation needed! Experience the complete banking system instantly.*

---

**Made with ❤️ by Gunjan Khatri**

[GitHub](https://github.com/gunjankhatri319) • [LinkedIn](https://linkedin.com/in/gunjankhatri319) • [Portfolio](https://gunjankhatri.dev)

</div>

---

*Last Updated: 2024 | Licensed under MIT*

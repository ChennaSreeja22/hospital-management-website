# 🏥 SVR Multi Speciality Hospital

A full-stack Hospital Management System developed for educational purposes using **React**, **Django REST Framework**, and **PostgreSQL**.

The project demonstrates a modern and responsive hospital management application where users can browse departments, view doctors, book appointments, and contact the hospital through an intuitive web interface.

---

## 📌 Project Overview

SVR Multi Speciality Hospital is designed to simplify hospital services through a user-friendly web application. It integrates a React frontend with a Django REST API backend to provide dynamic healthcare information and appointment booking.

---

## ✨ Features

### Frontend
- Responsive navigation bar
- Modern landing page with hero section
- About page
- Department listing
- Doctor directory
- Search doctors by name
- Filter doctors by department
- Book appointment page
- Contact page
- Footer
- Responsive design for desktop, tablet and mobile

### Backend
- REST APIs using Django REST Framework
- PostgreSQL database
- Appointment management
- Contact message management
- Django Admin Panel

### Forms & Validation
- Appointment form validation
- Contact form validation
- Email format validation
- Required field validation
- Success and error messages
- Real-time field validation
- Auto-selected doctor when booking from Doctors page

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- React Icons
- CSS

### Backend
- Django
- Django REST Framework

### Database
- PostgreSQL

---

## 📂 Project Structure

```
hospital-website
│
├── backend
│   ├── api
│   ├── hospital
│   ├── manage.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 📄 Pages

- Home
- About
- Departments
- Doctors
- Appointment
- Contact

---

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/departments/` | GET | Retrieve all departments |
| `/api/doctors/` | GET | Retrieve all doctors |
| `/api/appointments/` | POST | Book an appointment |
| `/api/contact/` | POST | Submit a contact message |

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/hospital-website.git
```

---

### Backend Setup

```bash
cd backend

python -m venv venv
```

Activate virtual environment

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Start backend server

```bash
python manage.py runserver
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🗄 Database

This project uses **PostgreSQL** as the database.

Update your database credentials in:

```
backend/settings.py
```

before running the project.

---

## 📷 Screenshots

Add screenshots here after uploading them.

### Home Page

*(Insert Screenshot)*

### Doctors Page

*(Insert Screenshot)*

### Appointment Page

*(Insert Screenshot)*

### Contact Page

*(Insert Screenshot)*

### About Page

*(Insert Screenshot)*

---

## 🚀 Future Improvements

- User authentication
- Online payment integration
- Appointment cancellation and rescheduling
- Doctor dashboard
- Patient dashboard
- Medical report management
- Email notifications
- SMS appointment reminders

---

## 👩‍💻 Author

**Chenna Sreeja**

Engineering Physics

Built as a Full Stack Web Development project using React, Django REST Framework, and PostgreSQL.

---

## 📜 License

This project is developed for educational purposes.
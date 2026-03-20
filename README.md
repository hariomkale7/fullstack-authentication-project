# Full Stack Auth Project

## Tech Stack
- Frontend: React.js
- Backend: Django + DRF
- Auth: JWT

## Features
- Register
- Login
- Profile
- Token-based authentication

## Setup Instructions

### Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend
cd frontend
npm install
npm start
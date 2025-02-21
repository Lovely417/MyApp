# MyApp: Full-Stack Application (Flask + React)

## 📌 Overview

This is a full-stack web application consisting of a **Flask backend** and a **React frontend**. The backend provides a REST API that processes JSON input, while the frontend allows users to input JSON, send it to the API, and display the filtered response.

---

## 🏗 Folder Structure

```
CompleteApp/
│── backend/         # Flask backend
│   │── app.py       # Main backend logic
│   │── requirements.txt # Dependencies
│   │── Procfile     # Required for Heroku deployment
│── frontend/        # React frontend
│   │── src/
│   │   │── App.js   # Main React component
│   │── public/
│   │   │── index.html # Entry point for React
│── README.md        # Instructions
```

---

## 🚀 How to Run the App on VS Code

### **1️⃣ Setup Backend (Flask)**

1. **Navigate to the backend folder**
   ```sh
   cd backend
   ```
2. **Create a virtual environment & activate it**
   - **Windows:**
     ```sh
     python -m venv venv
     venv\Scripts\activate
     ```
   - **macOS/Linux:**
     ```sh
     python3 -m venv venv
     source venv/bin/activate
     ```
3. **Install dependencies**
   ```sh
   pip install -r requirements.txt
   ```
4. **Run the backend**
   ```sh
   python app.py
   ```
   ✅ Flask will start at `http://localhost:5000/`

---

### **2️⃣ Setup Frontend (React)**

1. **Navigate to the frontend folder**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the React development server**
   ```sh
   npm start
   ```
   ✅ React will start at `http://localhost:3000/`

---

## 🛠 API Endpoints

### **POST **``

- **Request:**
  ```json
  { "data": ["A", "C", "z", "5", "9"] }
  ```
- **Response:**
  ```json
  {
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "numbers": ["5", "9"],
    "alphabets": ["A", "C", "z"],
    "highest_alphabet": ["z"]
  }
  ```

### **GET **``

- **Response:**
  ```json
  { "operation_code": 1 }
  ```

---

## 📡 Deploy the App

### **Deploy Backend to Heroku**

1. **Login to Heroku**
   ```sh
   heroku login
   ```
2. **Deploy**
   ```sh
   cd backend
   git init
   heroku create your-app-name
   git add .
   git commit -m "Deploy backend"
   git push heroku main
   ```

### **Deploy Frontend to Vercel**

1. **Install Vercel CLI**
   ```sh
   npm install -g vercel
   ```
2. **Deploy**
   ```sh
   cd frontend
   vercel
   ```

---

## 🎯 Features Implemented

✅ Backend REST API (`GET` & `POST` requests)\
✅ JSON Input Validation\
✅ Hosted API (Heroku)\
✅ React Frontend with JSON Input, API Call, & Filtering\
✅ Hosted Frontend (Vercel)

---

## Author: Lovely Sharma


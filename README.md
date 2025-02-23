# **Basic MERN Project** 🚀  

A full-stack MERN application with **React (Vite) frontend** and **Node.js/Express backend**.

## **📂 Project Structure**
```
Basic-MERN-Project/
│── backend/        # Node.js, Express.js, MongoDB
│   ├── controllers/   # API controllers
│   ├── db/            # Database connection
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── app.js         # Express app
│   ├── server.js      # Server setup
│   ├── .env.sample    # Environment variable example
│
│── frontend/       # React + Vite
│   ├── public/         # Static assets
│   ├── src/            # Frontend source code
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # App pages
│   │   ├── store/       # State management (Redux/Zustand)
│   │   ├── main.jsx     # Entry file
│   ├── index.html      # Main HTML file
│   ├── vite.config.js  # Vite configuration
│
│── package.json     # Dependencies
│── .gitignore       # Ignored files (node_modules, .env)
│── README.md        # Project documentation
```

---

## **⚙️ Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Tallal64/Basic-Mern-Project.git
cd Basic-Mern-Project
```

### **2️⃣ Install Dependencies**
#### **Backend**
```sh
cd backend
npm install
```
#### **Frontend**
```sh
cd ../frontend
npm install
```

### **3️⃣ Setup Environment Variables**
- Copy `.env.sample` to `.env` in `backend/`
- Add your MongoDB URL and other keys:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### **4️⃣ Run the Application**
#### **Start Backend**
```sh
cd backend
npm start
```
#### **Start Frontend**
```sh
cd frontend
npm run dev
```
The app will be running at **`http://localhost:5173`**.

---

## **📌 Features**
✅ **CRUD Operations** (Create, Read, Update, Delete)  
✅ **React with Vite** (Fast development)  
✅ **Express.js API** (Backend with routes)  
✅ **MongoDB with Mongoose** (Database)  
✅ **State Management** (Zustand/Redux)  

---

## **🛠️ Tech Stack**
- **Frontend:** React (Vite), Zustand/Redux, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Tools:** Git, Postman

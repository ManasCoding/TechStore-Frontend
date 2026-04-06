# 🛒 TechStore (E-commerce Platform)

TechStore is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce web application that allows users to browse, search, and purchase tech products online with a seamless shopping experience.

---

## 🎯 Objective

The goal of TechStore is to build a scalable and secure online shopping platform with modern UI and efficient backend services for handling products, users, and orders.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 🛍️ Product Listing & Categories
- 🔎 Search & Filter Products
- 🛒 Add to Cart & Wishlist
- 💳 Secure Payment Integration
- 📦 Order Management System
- ⭐ Product Reviews & Ratings
- 🧑‍💼 Admin Dashboard (Manage products & orders)
- 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux / Context API
- Axios
- Tailwind CSS 

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**Other Tools:**
- JWT Authentication
- Razorpay / Stripe (Payment Gateway)
- Cloudinary (Product Images)

---

## 📂 Folder Structure

WebStream/
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone Repository


---

### 2. Install Dependencies

**Frontend**

cd frontend
npm install


**Backend**

cd backend
npm install


---

### 3. Environment Variables

Create `.env` file in backend:


PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


---

### 4. Run Application

**Backend**

npm run dev


**Frontend**

npm run dev


---

## 🔄 API Endpoints (Sample)

- `POST /api/auth/register` → Register user  
- `POST /api/auth/login` → Login  
- `GET /api/products` → Get all products  
- `POST /api/cart` → Add to cart  
- `POST /api/orders` → Place order  
- `POST /api/payment` → Handle payment  

---

## 📸 Screenshots

_Add your screenshots here (Home, Product Page, Cart, Checkout, etc.)_

---

## 💡 Future Enhancements

- 🤖 AI-based product recommendations  
- 🚚 Order tracking system  
- 📲 Push notifications  
- 🌍 Multi-language support  

---

⭐ If you like this project, give it a star!

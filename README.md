# 🔒 SecureTip - Full-Stack Anonymous Reporting System

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

SecureTip is a **professional full-stack anonymous crime reporting platform** that enables citizens to securely submit information about suspicious activities while allowing administrators to review those reports via a centralized dashboard.

---

## 🌐 Live Demo (Optional)
> Add your deployed link here  
Example: https://securetip.onrender.com

---

# 🏗️ System Architecture & Working Logic

SecureTip follows a **Client–Server–Database architecture**:

## 1️⃣ Frontend (Client)
- Built using **HTML5, CSS3, and JavaScript (ES6)**
- Responsive design for mobile and desktop
- `script.js`:
  - Captures form submission
  - Prevents default refresh behavior
  - Packages data into a JSON object
  - Sends data to backend using **Fetch API**

## 2️⃣ Backend (Server)
- Built with **Node.js and Express.js**
- RESTful API structure
- Validates incoming data
- Connects to MongoDB using **Mongoose**
- Uses **dotenv** for secure credential management

### API Endpoints

| Method | Endpoint        | Description |
|--------|-----------------|-------------|
| POST   | `/api/submit`   | Submit a new anonymous report |
| GET    | `/api/tips`     | Fetch all reports (Admin Dashboard) |

## 3️⃣ Database (Cloud)
- **MongoDB Atlas**
- Data structured using a Mongoose Schema
- Cloud-hosted & persistent storage

---

# 💻 Core System Code

## 📦 Database Schema (Mongoose Model)

```javascript
const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
    activityType: String,
    location: String,
    description: String,
    date: String,
    submittedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Tip', tipSchema);
```

---

# ✨ Key Features

- 🛡️ **Complete Anonymity** – No personal identity required  
- ☁️ **Cloud Database** – MongoDB Atlas integration  
- 📱 **Fully Responsive UI** – Mobile & desktop optimized  
- 👮 **Admin Dashboard** – Secure review interface  
- ⚡ **RESTful API Architecture**  
- 🔒 **Environment Variable Security** (dotenv)  
- 🚀 **Production Ready Structure**

---

# 🚀 Installation & Setup

Follow these steps to run the project locally:

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/nlshhh/SecureTip.git
cd SecureTip
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
```

⚠️ Important: Never upload `.env` to GitHub. Ensure `.env` is listed in `.gitignore`.

---

## 4️⃣ Run the Application

### Start normally
```bash
npm start
```

### Development mode (with auto-restart using nodemon)
```bash
npm run dev
```

Server will run on:
```
http://localhost:3000
```

---

# 📁 Project Structure

```
SecureTip/
│
├── public/                  # Frontend (Static Files)
│   ├── index.html           # Anonymous Reporting Form
│   ├── admin.html           # Admin Dashboard
│   ├── script.js            # Fetch API Logic
│   └── styles.css           # Styling
│
├── models/
│   └── Tip.js               # Mongoose Schema
│
├── server.js                # Main Backend Entry Point
├── package.json             # Dependencies & Scripts
├── .env                     # Environment Variables (Ignored)
└── .gitignore               # Git Configuration
```

---

# 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Dotenv

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

---

# 🔐 Security Practices Implemented

- Environment variables for sensitive data
- Cloud-based database protection
- Input validation on server-side
- Separation of frontend and backend logic
- RESTful structure for controlled access

---

# 📌 Future Improvements

- Authentication for Admin Dashboard
- JWT-based authorization
- File/image upload support
- Report status tracking system
- Email notifications
- Rate limiting & advanced security middleware

---

# 📊 System Workflow

1. User fills anonymous report form.
2. JavaScript captures form data.
3. Data sent to backend using Fetch API.
4. Express API validates request.
5. Mongoose saves report in MongoDB Atlas.
6. Admin Dashboard fetches reports using GET endpoint.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a pull request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Developer

**Neelesh Sachdeva**  
B.Tech Student | Full-Stack Developer  

Submitted for Hackathon / Academic Project Review

---

⭐ If you like this project, consider giving it a star on GitHub!
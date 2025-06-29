# 🎓 Student Management App

A full-stack web application for managing students, built using:

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript + MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Security**: Helmet, CORS, input validation

---

## 🚀 Project Features

### ✅ Authentication
- Secure login & registration using JWT
- Passwords are hashed with bcrypt
- Frontend validation (email format, strong password rules)
- Confirm password with copy-paste protection

### ✅ Student Management
- Add new student with name, email, course, and status (active/inactive)
- Display all students in a table
- Status dropdown with default value `active`

### ✅ UI/UX
- Responsive layout with Tailwind CSS
- Toast notifications for user feedback
- Password strength meter
- Eye toggle for password fields

### ✅ Routing
- Protected Dashboard using `React Router` and `ProtectedRoute`
- Logout clears token and redirects to login

---

## 🧰 Technologies Used

### Frontend
- **Vite**: Fast React development
- **React + TypeScript**: Typed components
- **Tailwind CSS**: Utility-first styling
- **React Router DOM**: Navigation and route protection
- **React Toastify**: Toast notifications
- **Heroicons**: Eye icons for password toggles

### Backend
- **Node.js + Express**: RESTful API
- **TypeScript**: Strongly typed backend code
- **Mongoose**: Object modeling for MongoDB
- **JWT**: Secure authentication tokens
- **bcryptjs**: Password hashing

### Security
- **Helmet**: Sets secure HTTP headers
- **CORS**: Allows cross-origin frontend-backend communication
- **dotenv**: Manages environment secrets like `JWT_SECRET`, `MONGO_URI`

---

## 📁 Folder Structure

Here is the **complete `README.md`** file starting **from the Folder Structure section onward**, with all necessary technical, usage, and architectural details for your full-stack Student Management App.

---

```md
# 🎓 Student Management App

A full-stack web application for managing students.

- **Frontend**: Vite + React + TypeScript + Tailwind CSS  
- **Backend**: Node.js + Express + TypeScript + MongoDB (via Mongoose)  
- **Authentication**: JWT-based  
- **Security**: Helmet, CORS, Input Validation

---

## 📁 Folder Structure

```

Student\_Application/
├── SA\_Frontend/               # Vite + React + TypeScript + Tailwind Frontend
│   ├── src/
│   │   ├── pages/             # Login.tsx, Register.tsx, Dashboard.tsx
│   │   ├── components/        # ProtectedRoute.tsx
│   │   ├── utils/             # validation.ts, api.ts
│   │   └── main.tsx           # App entry point
│   └── vite.config.ts
│
├── SA\_Backend/                # Express + Node.js + TypeScript Backend
│   ├── src/
│   │   ├── models/            # User.ts, Student.ts (Mongoose models)
│   │   ├── routes/            # auth.ts, student.ts
│   │   ├── middleware/        # auth.ts (JWT verification)
│   │   └── index.ts           # Express server entry point
│   └── tsconfig.json
│
├── README.md
└── .env                       # For JWT\_SECRET, MONGO\_URI, etc.

## 🛠️ How to Run the Project

### 📦 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Student_Application
````

### ⚙️ 2. Backend Setup

```bash
cd SA_Backend
npm install
touch .env
```

#### 📄 Add Environment Variables in `.env`

```env
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=yourSuperSecretKey
PORT=5001
```

#### ▶️ Start Server

```bash
npm run dev
```

---

### 💻 3. Frontend Setup

```bash
cd SA_Frontend
npm install
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Security Measures

| Measure                 | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| JWT Authentication      | Tokens used to protect backend routes and user sessions   |
| Bcrypt Password Hashing | Passwords hashed securely before storing                  |
| Helmet                  | Adds security-related HTTP headers                        |
| CORS                    | Restricts cross-origin requests to only frontend origin   |
| Validation              | Regex checks for email and password strength              |
| Protected Routes        | Frontend `ProtectedRoute` blocks unauthenticated access   |
| Disable Copy/Paste      | Prevent copying password into Confirm Password field      |
| Toast Feedback          | Success/failure messages for better UX and error tracking |

---

## 🧠 Future Enhancements

* ✏️ Edit/Delete student records
* 📊 Add pagination and search filters
* 🌐 Deploy on:

  * **Vercel** (Frontend)
  * **Render/Heroku** (Backend)
  * **MongoDB Atlas** (Cloud DB)
* 🔁 Token refresh/expiry management
* 🧪 Unit & Integration testing

---


Here’s the updated section to include **Docker** and **Docker Compose** setup in your `README.md`. You can add this **after the "How to Run the Project" section** or at the end of your README.

---

```md
---

## 🐳 Docker Setup

You can run the entire project (Frontend + Backend + MongoDB) using **Docker** and **Docker Compose**.

### 📁 Folder Structure for Docker

```

Student\_Application/
├── SA\_Frontend/
│   ├── Dockerfile
│   └── .dockerignore
├── SA\_Backend/
│   ├── Dockerfile
│   └── .dockerignore
├── docker-compose.yml
└── .env

````

---

### 🐳 Docker Instructions

#### ⚙️ Step 1: Backend `.env`

Create `SA_Backend/.env` file:

```env
MONGO_URI=mongodb://mongo:27017/student_app
JWT_SECRET=yourSuperSecretKey
PORT=5000
````

> Use `mongo` as the hostname (Docker service name).

---

#### 🐳 Step 2: Build & Run

From the root folder:

```bash
docker-compose up --build
```

> This will start:

* **MongoDB** on port `27017`
* **Backend** on port `5001`
* **Frontend** on port `5173`

---

### 🗃️ .dockerignore Files

#### SA\_Backend/.dockerignore

```
node_modules
dist
.env
*.log
.DS_Store
coverage
```

#### SA\_Frontend/.dockerignore

```
node_modules
dist
.env
*.log
.DS_Store
.vite
coverage
```

---

### 🛑 Stop Containers

```bash
docker-compose down
```

---

## ✅ Summary

Docker makes it easy to:

* Spin up the full stack app with one command
* Ensure environment consistency
* Simplify deployment

---

## ⚙️ GitHub Actions CI

This project uses GitHub Actions to:

- Install frontend/backend dependencies
- Build both apps on each push to `main`

### 📂 Workflow File

See: `.github/workflows/main.yml`

### 🛠️ How to Use

- Push to `main` to trigger CI

---

## 🧑‍💻 Author

**Shubham Yamagekar**
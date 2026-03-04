# 📝 MERN Notes Application

A full-stack **Notes Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**. This project demonstrates a clean backend architecture, RESTful API development, rate limiting using Redis, and a modern responsive frontend built with React, TailwindCSS, and DaisyUI.

---

## 🚀 Features

* Create, view, and delete notes
* RESTful API with Express
* MongoDB database integration using Mongoose
* Rate limiting using Upstash Redis
* Environment-based configuration
* Responsive UI with TailwindCSS + DaisyUI
* Client-side routing with React Router
* Toast notifications and modern UI icons
* Fully deployable full-stack architecture

---

## 🛠️ Tech Stack

### Backend (Node.js + Express)

**Dependencies:**

* express
* mongoose
* cors
* dotenv
* @upstash/ratelimit
* @upstash/redis

**Concepts Used:**

* REST APIs
* Middleware
* Rate Limiting with Redis
* Environment Variables
* MVC-style folder structure

---

### Frontend (React + Vite)

**Dependencies:**

* react
* react-dom
* react-router
* react-router-dom
* axios
* react-hot-toast
* lucide-react

**Styling:**

* TailwindCSS
* DaisyUI

---

## 📂 Project Structure

### Backend Structure

```
backend
├── node_modules
├── src
│   ├── config
│   │    ├── db.js
│   │    └── upstash.js
│   ├── controller
│   │    └── notesController.js
│   ├── middleware
│   │    └── rateLimiter.js
│   ├── models
│   │    └── Note.js
│   ├── routes
│   │    └── notesRoutes.js
│   └── server.js
├── .env
├── .gitignore
├── package-lock.json
└── package.json
```

### Frontend Structure

```
frontend
├── dist
├── node_modules
├── public
├── src
│   ├── components
│   │    ├── NavBar.jsx
│   │    ├── NoteCard.jsx
│   │    ├── NoteNoteFound.jsx
│   │    └── RateLimitedUI.jsx
│   ├── lib
│   │    ├── axios.js
│   │    └── utlis.js
│   ├── pages
│   │    ├── CreatePage.jsx
│   │    ├── HomePage.jsx
│   │    └── NoteDetailPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Environment Variables (Backend)

Create a `.env` file inside the `backend` folder and add:

```
MONGO_URL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NODE_ENV=development
```

---

## 🖥️ Installation & Running Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/Hassanstarr/mern-thinkboard.git
cd <project-folder>
```

---

### 2️⃣ Run Backend

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Run Frontend

```
cd frontend
npm install
npm run dev
```

---


### 4️⃣ Run Frontend & Backend Under the Same URL (Production Mode)

Make sure your `backend/.env` file contains:

```
NODE_ENV=production
```

Then from the **root directory** run:

```
npm run build
npm run start
```

This will:

* Build the frontend
* Serve the frontend from the backend
* Run both under the same URL

---


## 📌 API Endpoints

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| GET    | /api/notes     | Get all notes           |
| GET    | /api/notes/:id | Get a single note by ID |
| POST   | /api/notes     | Create a new note       |
| PUT    | /api/notes/:id | Update a note           |
| DELETE | /api/notes/:id | Delete a note           |

--------|-------------------|--------------------|
| GET    | /api/notes        | Get all notes      |
| POST   | /api/notes        | Create a new note  |
| DELETE | /api/notes/:id    | Delete a note      |

---

## 🌐 Deployment

* Backend deployed on: *[Render/Railway]*
* Frontend deployed on: *[Render/Vercel]*

Live Demo: **[Not deployed at the moment]**

---

## 🎯 Learning Outcomes

* Structuring a scalable full-stack MERN application
* Connecting React frontend with Express backend
* Implementing Redis-based rate limiting
* Managing secure environment variables
* Building responsive UI using TailwindCSS + DaisyUI
* Handling API requests using Axios

---

## 🔮 Future Improvements

* Add authentication (JWT-based)
* Add update/edit note functionality
* Add search and filtering
* Add pagination
* Add testing (unit + integration)

---

## 👤 Author

**GitHub:** [Hassanstarr](https://github.com/Hassanstarr)

---

## 📄 License

This project is licensed under the MIT License.
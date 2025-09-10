# 📌 README.md
# 🛠️ User Management CRUD API

A simple **Node.js + Express + MongoDB** CRUD application for managing users, with validations using **express-validator** and **Mongoose** schema rules.  

---

## 🚀 Features
- Create, Read, Update, and Delete users.
- Input validation using `express-validator`.
- MongoDB schema validation with Mongoose.
- Error handling for duplicate emails, invalid IDs, and validation errors.
- Uses environment variables for configuration.

---

## 📂 Project Structure
```

.
├── src
│   ├── Controller
│   │   └── userController.js
│   ├── Model
│   │   └── userModel.js
│   ├── Routes
│   │   └── userRoute.js
│   ├── Utils
│   │   └── validationschema.js
│   └── index.js (or index.mjs)
├── package.json
├── .env
└── README.md

````

---

## ⚙️ Installation & Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/user-crud-api.git
   cd user-crud-api
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file:

   ```env
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/user-crud
   ```

4. Start the server:

   ```bash
   npm run dev   # if using nodemon
   npm start     # normal start
   ```

Server will run on:
👉 `http://localhost:5000/api/users`
````
---

## 🔑 API Endpoints

### 👤 Create User

```http
POST /api/users/create
```

**Body (JSON)**:

```json
{
  "name": "Shawky",
  "email": "shawky@example.com",
  "address": "Beni Suef, Egypt"
}
```

✅ Returns created user or validation errors.

---

### 📥 Get All Users

```http
GET /api/users/getAllUsers
```

✅ Returns list of all users.
❌ If empty → `404 user not found`.

---

### ✏️ Update User

```http
PUT /api/users/update/:id
```

**Body (JSON)**:

```json
{
  "name": "New Name",
  "address": "Updated Address"
}
```

✅ Updates user if exists.
❌ If invalid ID → `400 Invalid user ID`.
❌ If not found → `404 user not found`.

---

### ❌ Delete User

```http
DELETE /api/users/delete/:id
```

✅ Deletes user by ID.
❌ If not found → `404 user not found`.

---

## 🛠️ Tech Stack

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [express-validator](https://express-validator.github.io/)

---

## 📌 Best Practices in This Project

* Using **separate folders** for controllers, models, routes, and utilities.
* **Schema-based validation** (both client request + DB schema).
* **Error handling** with meaningful status codes.
* **Environment variables** for sensitive configs.
* **Consistent response format**.

---

## 📜 License

This project is licensed under the MIT License.

# Store Rating System

This is a full-stack web application that allows users to sign up, log in, add stores, and rate them. The system is designed with RBAC (Role-Based Access Control), where only authenticated users can manage their own stores and provide ratings for stores owned by others.

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios for API requests
- React Router for navigation

**Backend:**
- Node.js with Express.js
- JWT for authentication
- MySQL for the database
- bcrypt for password hashing
- dotenv for environment variables

---

## 📌 Features

- User registration and login
- Authentication using JWT tokens
- Role-based access control (RBAC)
- Store creation (with owner ID automatically set to the logged-in user)
- List all available stores
- Rate stores (only for users other than the store owner)
- View average rating of each store

---

## 🧱 Database Schema

### `users`
- `id` (PK, auto-increment)
- `username`
- `email`
- `password` (hashed)

### `stores`
- `store_id` (PK, auto-increment)
- `name`
- `email`
- `address`
- `owner_id` (FK → users.id)
- `created_at` (auto-generated)

### `ratings`
- `id` (PK, auto-increment)
- `store_id` (FK → stores.store_id)
- `user_id` (FK → users.id)
- `rating` (integer 1–5)
- `review` (optional text)
- `created_at` (auto-generated)

## 🔐 Authentication & Authorization

- JWT tokens are generated during login and stored in localStorage.
- Tokens are sent in the Authorization header for protected routes.
- `auth.js` middleware validates JWT and attaches the user to the request.
- Only logged-in users can add or rate stores.

---

📦 Future Improvements
1. Admin role for managing all stores and users

2. Pagination and search for stores

3. Responsive UI design

4. View rating distribution (stars)

# Food Delivery Platform

A comprehensive, full-stack food delivery application featuring distinct portals for customers, restaurant owners (admins), and delivery partners. This platform facilitates the entire food ordering lifecycle—from exploring restaurants and browsing menus to order management and delivery tracking.

## Table of Contents
- [Project Working](#project-working)
- [Key Features](#key-features)
- [Directory Structure](#directory-structure)
- [How to Start](#how-to-start)
- [Available Scripts](#available-scripts)

---

## Project Working

The application is built using a modern decoupled architecture:
- **Frontend (Client)**: A React application powered by Vite, providing responsive and dynamic user interfaces for three primary user roles: Customers, Restaurant Owners, and Delivery Partners. It uses React Router for client-side navigation and role-based protected routes to restrict access based on the user's authentication status and role.
- **Backend (Server)**: A Node.js and Express.js RESTful API that handles business logic, user authentication, and data persistence.
- **Database**: MongoDB (via Mongoose) is used to store user profiles, restaurant details, menus, and order transactions.
- **Authentication**: JSON Web Tokens (JWT) and bcryptjs are used to securely authenticate users and hash passwords.

---

## Key Features

- **Multi-Role Authentication**: Distinct login and registration flows for Customers, Restaurant Owners, and Delivery Partners.
- **Role-Based Access Control**: Protected routes ensure that only authorized roles can access specific dashboards (e.g., only `restaurant_owner` can access the Admin Dashboard).
- **Customer Experience**: 
  - Explore local restaurants.
  - Browse interactive menus.
  - Review and place orders.
- **Restaurant Owner (Admin) Dashboard**:
  - Secure portal to manage restaurant profile.
  - View and manage incoming orders.
  - Update menus and track analytics.
- **Delivery Partner Dashboard**:
  - Dedicated view for drivers to see available delivery requests.
  - Manage and track ongoing deliveries.
- **Modern UI**: Built with React and styled elegantly, incorporating tools like `lucide-react` for beautiful iconography.

---

## Directory Structure

```text
food_delivery/
├── backend/                  # Node.js + Express backend
│   ├── src/                  
│   │   ├── config/           # Database connections and configuration variables
│   │   ├── controllers/      # Business logic handling incoming requests
│   │   ├── middlewares/      # Express middlewares (e.g., JWT Auth, Role validation)
│   │   ├── models/           # Mongoose schemas (User, Order, Restaurant, etc.)
│   │   ├── routes/           # Express API route definitions
│   │   └── utils/            # Helper functions and utilities
│   ├── server.js             # Main backend entry point
│   ├── .env                  # Backend environment variables
│   └── package.json          # Backend dependencies and scripts
│
└── frontend/                 # React + Vite frontend
    ├── public/               # Static assets
    ├── src/                  
    │   ├── admin/            # Admin (Restaurant Owner) views and components
    │   ├── assets/           # Images, icons, and styling assets
    │   ├── components/       # Reusable UI components (e.g., ProtectedRoute)
    │   ├── context/          # React Context providers for global state
    │   ├── driver/           # Delivery partner specific views and components
    │   ├── pages/            # General pages (Unauthorized, etc.)
    │   ├── App.jsx           # Main application router
    │   ├── main.jsx          # React application entry point
    │   └── index.css         # Global styles
    ├── index.html            # Main HTML template
    ├── vite.config.js        # Vite build configuration
    └── package.json          # Frontend dependencies and scripts
```

---

## How to Start

To run this project locally, you will need to start both the backend server and the frontend development server.

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed locally or a MongoDB Atlas connection string.

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure your `.env` file is configured correctly (e.g., MongoDB URI, JWT Secret, Port).
4. Start the development server:
   ```bash
   npm run dev
   ```
   The backend API will typically run on `http://localhost:5000` (depending on your port configuration).

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will typically run on `http://localhost:5173`.

---

## Available Scripts

### Backend. (`/backend`)
- `npm start`: Starts the backend server in production mode (`node server.js`).
- `npm run dev`: Starts the backend server in development mode using `nodemon`. Automatically restarts on file changes.

### Frontend (`/frontend`)
- `npm run dev`: Starts the Vite development server with hot-module replacement (HMR).
- `npm run build`: Bundles the React application for production into the `dist` folder.
- `npm run lint`: Runs ESLint to identify and report on patterns in the JavaScript/React code.
- `npm run preview`: Bootstraps a local static web server to serve the production build (`dist` folder) for previewing.

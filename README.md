# Food Delivery Platform - Frontend

This is the frontend client for the Food Delivery Platform. It is a modern, responsive Single Page Application (SPA) built with React and Vite, featuring dedicated portals for Customers, Restaurant Owners, and Delivery Partners.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Directory Structure](#directory-structure)
- [How to Start](#how-to-start)
- [Available Scripts](#available-scripts)

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Standard CSS with modern aesthetic principles
- **Icons**: Lucide React

---

## Key Features

- **Multi-Portal UI**: 
  - **Customer View**: Landing page, restaurant exploration, menu browsing, and order checkout.
  - **Admin Dashboard**: Secured portal for `restaurant_owner` to manage menus, view analytics, and handle incoming orders.
  - **Driver Dashboard**: Secured portal for `delivery_partner` to view and accept active delivery requests.
- **Protected Routes**: Client-side route guarding utilizing Context and JWTs to ensure users can only access views permitted by their role.
- **Fast Development**: Powered by Vite for lightning-fast Hot Module Replacement (HMR).

---

## Directory Structure

```text
frontend/
├── public/               # Static assets (favicon, etc.)
├── src/                  
│   ├── admin/            # Components and Pages for the Restaurant Owner Dashboard
│   ├── assets/           # Local images and graphic assets
│   ├── components/       # Reusable UI elements (e.g., ProtectedRoute)
│   ├── context/          # React Contexts for global state (e.g., AuthContext)
│   ├── driver/           # Components and Pages for the Delivery Partner Dashboard
│   ├── pages/            # General pages (Unauthorized fallback, etc.)
│   ├── App.jsx           # Main React Router configuration
│   ├── main.jsx          # React application mount point
│   └── index.css         # Global CSS styles and variables
├── index.html            # Main HTML entry file
├── vite.config.js        # Vite configuration rules
└── package.json          # Frontend dependencies and scripts
```

---

## How to Start

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- Ensure the Backend server is running to allow API interactions.

### Setup Instructions

1. Install frontend dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## Available Scripts

In the `frontend` directory, you can run:

- `npm run dev`: Runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will automatically reload if you make edits.
- `npm run build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.
- `npm run preview`: Boots up a local static web server that serves the files from the `dist` folder, allowing you to preview the production build locally.
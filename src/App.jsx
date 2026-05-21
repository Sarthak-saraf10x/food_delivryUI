import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import LandingPage from './LandingPage';
import ExploreRestaurants from './ExploreRestaurants';
import Menu from './Menu';
import ReviewOrder from './ReviewOrder';
import Login from './Login';
import Register from './Register';
import Unauthorized from './pages/Unauthorized';

// Admin auth pages (restaurant-specific)
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './admin/AdminRegister';

// Admin dashboard shell + nested pages
import AdminDashboardLayout from './admin/AdminDashboardLayout';
import AdminOverview from './admin/AdminOverview';

// Route guard
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public routes ── */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExploreRestaurants />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<ReviewOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ── Admin / Restaurant-owner auth ── */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* ── Protected admin dashboard (restaurant_owner only) ── */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={['restaurant_owner']}
              redirectTo="/admin/login"
            >
              <AdminDashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Nested dashboard pages – rendered inside <Outlet /> */}
          <Route index element={<AdminOverview />} />
          {/* Placeholder routes for upcoming phases */}
          <Route path="orders"   element={<AdminOverview />} />
          <Route path="menu"     element={<AdminOverview />} />
          <Route path="profile"  element={<AdminOverview />} />
          <Route path="analytics" element={<AdminOverview />} />
          <Route path="reviews"  element={<AdminOverview />} />
        </Route>

        {/* ── Legacy /dashboard redirect ── */}
        <Route path="/dashboard" element={<Navigate to="/admin/dashboard" replace />} />

        {/* ── 404 fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

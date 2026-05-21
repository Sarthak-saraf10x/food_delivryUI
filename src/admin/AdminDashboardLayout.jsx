import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminDashboardLayout.css';

const navItems = [
  { to: '/admin/dashboard', icon: 'dashboard', label: 'Overview' },
  { to: '/admin/dashboard/orders', icon: 'receipt_long', label: 'Orders' },
  { to: '/admin/dashboard/menu', icon: 'menu_book', label: 'Menu' },
  { to: '/admin/dashboard/profile', icon: 'storefront', label: 'Store Profile' },
  { to: '/admin/dashboard/analytics', icon: 'bar_chart', label: 'Analytics' },
  { to: '/admin/dashboard/reviews', icon: 'star', label: 'Reviews' },
];

const AdminDashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className={`admin-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="material-symbols-outlined sidebar-logo-icon">local_dining</span>
            {sidebarOpen && <span className="sidebar-brand">Admin Panel</span>}
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <span className="material-symbols-outlined">
              {sidebarOpen ? 'chevron_left' : 'chevron_right'}
            </span>
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin/dashboard'}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? 'active' : ''}`
              }
              title={!sidebarOpen ? label : undefined}
            >
              <span className="material-symbols-outlined nav-icon">{icon}</span>
              {sidebarOpen && <span className="nav-label">{label}</span>}
              {sidebarOpen && <span className="nav-active-bar" />}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user" title={!sidebarOpen ? user?.name : undefined}>
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            {sidebarOpen && (
              <div className="user-info">
                <span className="user-name">{user?.name || 'Admin'}</span>
                <span className="user-role">Restaurant Owner</span>
              </div>
            )}
          </div>
          <button
            className="sidebar-logout"
            onClick={handleLogout}
            title="Sign out"
            aria-label="Sign out"
          >
            <span className="material-symbols-outlined">logout</span>
            {sidebarOpen && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* ── Main content area ── */}
      <div className="admin-main">
        {/* Top bar */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="topbar-title">Dashboard</h2>
          </div>
          <div className="topbar-right">
            <div className="topbar-chip">
              <span className="status-dot" />
              Store Online
            </div>
            <div className="topbar-avatar">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        {/* Page content rendered by nested routes */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;

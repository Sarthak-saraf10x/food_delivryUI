import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminAuth.css';

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // After login, go to the page they originally tried to visit, else dashboard
  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: 'restaurant_owner' }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token, data.data.user, data.data.restaurantId);
        navigate(from, { replace: true });
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch {
      setError('Network error. Please make sure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-auth-page">
      {/* Animated blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="admin-auth-card">
        {/* Brand */}
        <div className="admin-auth-brand">
          <div className="brand-icon-wrap">
            <span className="material-symbols-outlined brand-icon">storefront</span>
          </div>
          <div>
            <h1 className="brand-name">Restaurant Admin</h1>
            <p className="brand-sub">Neeta's Kitchen Partner Portal</p>
          </div>
        </div>

        <div className="admin-auth-divider">
          <span>Sign in to your dashboard</span>
        </div>

        {/* Error banner */}
        {error && (
          <div className="auth-error-banner" role="alert">
            <span className="material-symbols-outlined">error</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="admin-auth-form" noValidate>
          <div className="form-field">
            <label htmlFor="admin-email">Email address</label>
            <div className="input-wrap">
              <span className="material-symbols-outlined field-icon">mail</span>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@restaurant.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="admin-password">Password</label>
            <div className="input-wrap">
              <span className="material-symbols-outlined field-icon">lock</span>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                minLength={8}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <button
            id="admin-login-submit"
            type="submit"
            className="admin-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner" />
                Signing in…
              </>
            ) : (
              <>
                Sign In
                <span className="material-symbols-outlined">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        <p className="admin-auth-footer">
          Don't have an account?{' '}
          <Link to="/admin/register" className="auth-link">
            Register your restaurant
          </Link>
        </p>

        <p className="admin-auth-footer" style={{ marginTop: '0.5rem' }}>
          <Link to="/login" className="auth-link secondary">
            ← Back to main login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

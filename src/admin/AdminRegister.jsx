import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminAuth.css';

const AdminRegister = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 2-step form
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Step 1 – owner info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2 – restaurant info
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [openingHours, setOpeningHours] = useState('');

  const handleStep1 = (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setStep(2);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          role: 'restaurant_owner',
          restaurantName,
          address,
          cuisine,
          openingHours,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token, data.data.user, data.data.restaurantId);
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(data.message || 'Registration failed. Please try again.');
        setStep(1);
      }
    } catch {
      setError('Network error. Please make sure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-auth-page">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="admin-auth-card wide">
        {/* Brand */}
        <div className="admin-auth-brand">
          <div className="brand-icon-wrap">
            <span className="material-symbols-outlined brand-icon">restaurant</span>
          </div>
          <div>
            <h1 className="brand-name">Register Restaurant</h1>
            <p className="brand-sub">Join the Neeta's Kitchen network</p>
          </div>
        </div>

        {/* Step indicator */}
        <div className="step-indicator">
          <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
            <span>1</span>
          </div>
          <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
          <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
            <span>2</span>
          </div>
        </div>
        <p className="step-label">
          {step === 1 ? 'Owner Account Details' : 'Restaurant Information'}
        </p>

        {/* Error banner */}
        {error && (
          <div className="auth-error-banner" role="alert">
            <span className="material-symbols-outlined">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* ── Step 1: Owner Info ── */}
        {step === 1 && (
          <form onSubmit={handleStep1} className="admin-auth-form" noValidate>
            <div className="form-field">
              <label htmlFor="reg-name">Full Name</label>
              <div className="input-wrap">
                <span className="material-symbols-outlined field-icon">badge</span>
                <input
                  id="reg-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="reg-email">Email address</label>
              <div className="input-wrap">
                <span className="material-symbols-outlined field-icon">mail</span>
                <input
                  id="reg-email"
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
              <label htmlFor="reg-password">Password</label>
              <div className="input-wrap">
                <span className="material-symbols-outlined field-icon">lock</span>
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  autoComplete="new-password"
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

            <button id="reg-next-btn" type="submit" className="admin-submit-btn">
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        )}

        {/* ── Step 2: Restaurant Info ── */}
        {step === 2 && (
          <form onSubmit={handleRegister} className="admin-auth-form" noValidate>
            <div className="form-field">
              <label htmlFor="rest-name">Restaurant Name</label>
              <div className="input-wrap">
                <span className="material-symbols-outlined field-icon">storefront</span>
                <input
                  id="rest-name"
                  type="text"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  placeholder="e.g. Mama Mia's Bistro"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="rest-address">Address</label>
              <div className="input-wrap">
                <span className="material-symbols-outlined field-icon">location_on</span>
                <input
                  id="rest-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Full restaurant address"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="rest-cuisine">Cuisine Types</label>
                <div className="input-wrap">
                  <span className="material-symbols-outlined field-icon">local_dining</span>
                  <input
                    id="rest-cuisine"
                    type="text"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    placeholder="e.g. Indian, Chinese"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="rest-hours">Opening Hours</label>
                <div className="input-wrap">
                  <span className="material-symbols-outlined field-icon">schedule</span>
                  <input
                    id="rest-hours"
                    type="text"
                    value={openingHours}
                    onChange={(e) => setOpeningHours(e.target.value)}
                    placeholder="e.g. 9 AM – 10 PM"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions-row">
              <button
                type="button"
                className="admin-back-btn"
                onClick={() => setStep(1)}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back
              </button>
              <button
                id="reg-submit-btn"
                type="submit"
                className="admin-submit-btn flex-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner" />
                    Creating…
                  </>
                ) : (
                  <>
                    Create Restaurant
                    <span className="material-symbols-outlined">check_circle</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <p className="admin-auth-footer">
          Already have an account?{' '}
          <Link to="/admin/login" className="auth-link">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;

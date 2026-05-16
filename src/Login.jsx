import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));

        if (role === 'customer') {
          navigate('/explore');
        } else if (role === 'restaurant_owner') {
          navigate('/dashboard');
        } else if (role === 'delivery_partner') {
          navigate('/dashboard');
        }
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-glass-container glass-panel">
        <div className="login-header">
          <span className="material-symbols-outlined login-logo-icon">cloud</span>
          <h2 className="login-title">Neeta's Kitchen Login</h2>
          <p className="login-subtitle">Select your portal to continue</p>
        </div>
        
        <div className="role-selector">
          <button 
            type="button"
            className={`role-btn ${role === 'customer' ? 'active' : ''}`}
            onClick={() => setRole('customer')}
          >
            <span className="material-symbols-outlined">person</span>
            Customer
          </button>
          <button 
            type="button"
            className={`role-btn ${role === 'restaurant_owner' ? 'active' : ''}`}
            onClick={() => setRole('restaurant_owner')}
          >
            <span className="material-symbols-outlined">storefront</span>
            Restaurant
          </button>
          <button 
            type="button"
            className={`role-btn ${role === 'delivery_partner' ? 'active' : ''}`}
            onClick={() => setRole('delivery_partner')}
          >
            <span className="material-symbols-outlined">two_wheeler</span>
            Driver
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Coordinates</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">mail</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Access Code</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">lock</span>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                required 
              />
            </div>
          </div>

          <button type="submit" className="login-submit-btn btn-primary">
            Initiate Sequence
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </form>

        <div className="login-footer">
          <p>Not in orbit yet? <Link to="/register" className="register-link">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

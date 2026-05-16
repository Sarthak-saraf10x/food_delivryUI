import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-glass-container glass-panel">
        <div className="register-header">
          <span className="material-symbols-outlined register-logo-icon">person_add</span>
          <h2 className="register-title">Join Neeta's Kitchen</h2>
          <p className="register-subtitle">Select your profile type to begin</p>
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

        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">badge</span>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                required 
              />
            </div>
          </div>

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
                placeholder="Create a password" 
                required 
                minLength="8"
              />
            </div>
          </div>

          <button type="submit" className="register-submit-btn btn-primary">
            Launch Profile
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </form>

        <div className="register-footer">
          <p>Already in orbit? <Link to="/login" className="login-link">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';

const Login = () => {
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
        body: JSON.stringify({ email, password, role: 'customer' }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));

        navigate('/explore');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
          role: 'customer'
        }),
      });
      
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        navigate('/explore');
      } else {
        alert(data.message || 'Google Login failed');
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('An error occurred during Google login.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-glass-container glass-panel">
        <div className="login-header">
          <span className="material-symbols-outlined login-logo-icon">cloud</span>
          <h2 className="login-title">Neeta's Kitchen Login</h2>
          <p className="login-subtitle">Sign in to your customer account</p>
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

        <div className="google-login-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('Login Failed');
              alert('Google login failed');
            }}
            useOneTap
          />
        </div>

        <div className="login-footer">
          <p>Not in orbit yet? <Link to="/register" className="register-link">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

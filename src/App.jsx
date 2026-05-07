import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ExploreRestaurants from './ExploreRestaurants';
import Menu from './Menu';
import ReviewOrder from './ReviewOrder';
import Login from './Login';
import Register from './Register';
import './index.css';

import Dashboard from './Dashboard';

// A simple navigation wrapper for development
const NavWrapper = ({ children }) => (
  <>
    <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 9999, background: 'rgba(0,0,0,0.8)', padding: '10px', borderRadius: '8px', display: 'flex', gap: '10px' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/explore" style={{ color: 'white' }}>Explore</Link>
      <Link to="/menu" style={{ color: 'white' }}>Menu</Link>
      <Link to="/login" style={{ color: 'white' }}>Login</Link>
      <Link to="/register" style={{ color: 'white' }}>Register</Link>
      <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
    </div>
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <NavWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExploreRestaurants />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<ReviewOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </NavWrapper>

    </BrowserRouter>
  );
}

export default App;

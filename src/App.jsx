import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ExploreRestaurants from './ExploreRestaurants';
import Menu from './Menu';
import ReviewOrder from './ReviewOrder';
import './index.css';

// A simple navigation wrapper for development
const NavWrapper = ({ children }) => (
  <>
    <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 9999, background: 'rgba(0,0,0,0.8)', padding: '10px', borderRadius: '8px', display: 'flex', gap: '10px' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/explore" style={{ color: 'white' }}>Explore</Link>
      <Link to="/menu" style={{ color: 'white' }}>Menu</Link>
      <Link to="/review" style={{ color: 'white' }}>Review Order</Link>
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
        </Routes>
      </NavWrapper>
    </BrowserRouter>
  );
}

export default App;

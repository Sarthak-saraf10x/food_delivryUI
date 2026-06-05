import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* TopAppBar */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="material-symbols-outlined logo-icon">cloud</span>
          <span className="logo-text">Neeta's Kitchen</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link active">Explore</a>
          <a href="#" className="nav-link">Offers</a>
          <a href="#" className="nav-link">Orders</a>
        </div>
        
        <div className="nav-actions">
          <button className="cart-btn">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main style={{ paddingTop: '128px' }}>
        
        {/* Hero Section */}
        <section className="hero-section">
          {/* Background Elements */}
          <div 
            className="hero-bg-gradient" 
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="hero-blur-circle-1" 
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
          <div 
            className="hero-blur-circle-2" 
            style={{ transform: `translateY(${scrollY * 0.6}px)` }}
          ></div>
          
          <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <h1 className="hero-title">
              Taste the <span className="hero-title-italic">Heights</span>
            </h1>
            <p className="hero-subtitle">
              Experience revolutionary delivery where your favorites arrive with the lightness of air. Premium ingredients, antigravity speed.
            </p>
            
            {/* Glassmorphic Search Bar */}
            <div className="glass-panel search-bar">
              <div className="search-input-wrapper">
                <span className="material-symbols-outlined search-icon">location_on</span>
                <input 
                  className="search-input" 
                  placeholder="Enter your celestial coordinates..." 
                  type="text" 
                />
              </div>
              <button className="search-btn">
                Find Food
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
              </button>
            </div>
            
            {/* Floating Categories */}
            <div className="categories-container">
              <div className="glass-panel category-card">
                <div className="category-img-wrapper">
                  <img alt="Pizza" className="category-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJF1v5XfF6RnF8zStIep2ZHqOFNMh1m1XH1UD5MSqUC5SYwhSTRSPQ1bF6Z1gB9IuXna8Hob81uGBTKl1zEpplchsTZdxgTjvnqW2qY_V-hR46vn32mfNFTqyxM5OG4A1srBbL9coLpeBhs4pZP33ZpthcwHnCDJ2YSQ2tsIGNPB7phlDCVnMJly7C_0AQwTpYANMmU9cxm1jFNZ_wIIKHS5bduMVe_X3RjlW_G8EXbJd0Q2xiexPm_2Yu1QvVo78MpXevNwOvDko" />
                </div>
                <span className="category-title">Pizza</span>
              </div>
              
              <div className="glass-panel category-card">
                <div className="category-img-wrapper">
                  <img alt="Sushi" className="category-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohA4ZT9oF9spoiwgVAvBl2JnCpwdlAuirlaSjuMsXaUTQNE5X0j8j3AxzAdnGL2baKWZTu88GxKZ88SKRZJHHtNHvf5Hc5rt4EmxyytS8HpvFDtz1N1tdU1aYV2iue7eSBfvl3wHrkt10RZy1nmvhyTrIJa4yn2N37xYSPH07wuaQ16HHXDjrBo1c7labZ4wQCHiPSAIYO-LSUYdV8eoz-ddd_OYH1W5Ykoz12iZKlUH1sq5oExFQjxxAewmwJurJQpSvC43BpJo" />
                </div>
                <span className="category-title">Sushi</span>
              </div>
              
              <div className="glass-panel category-card">
                <div className="category-img-wrapper">
                  <img alt="Burgers" className="category-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqK0PFmE1yuLzMEPdPWzYMt7kDhvy_dvdf34ed80o2XDGvM6qIY0kbRcH969-79wfZQGhJe2MTLr6Tunb8jZyayAsuuLjUQv7VQhjNU2Zfn8cv8aBoJpueHDoJyhyG3mlq_ofQkNw84C7Ez2IJK3r4WAY_9_NV-e4d4RiHVckM7QuVqJ3VieECHifbzz6-ZM3iHYGxlwSO3Rz-QeIRcexA5CWTd0WIqG1UGzAq09bOvHJny_1zblH_sbYvLBsPvFRfhWO1c14zPFE" />
                </div>
                <span className="category-title">Burgers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Restaurants Section */}
        <section className="featured-section">
          <div className="featured-header">
            <div>
              <h2 className="featured-title">Top Orbit Venues</h2>
              <p className="featured-subtitle">Highly rated by our frequent flyers</p>
            </div>
            <button className="view-all-btn">
              View all <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          
          {/* Restaurant Grid */}
          <div className="restaurant-grid">
            {/* Card 1 */}
            <div className="glass-panel restaurant-card">
              <div className="restaurant-img-wrapper">
                <img className="restaurant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_T0XLd31E8Ulza1oxIZLqlQo6mtircahcljL_ZSTG1sTSO9T1HHtDLH00CT197fob_7RzZz3tPOGgpN6JZAywLSdHX-5OKVx6Y9nBx4TFy4UHW04xlGW2e8P5H9NrMibD7LoNaxNs5iCoPKEGW7S7oHIN6x4iv7BXaNQlAnOr51raz8oxR1TG0BAfBrO1dzAOedM3aj7eaCId8u65fDKfD4x-QmXQk4LkhgI5dSuf2BbzmI9-eh7nXyuv0C5zNCLjLLpw8I2CZHA" alt="Atmosphere Kitchen" />
                <div className="glass-panel rating-badge">
                  <span className="material-symbols-outlined rating-icon">star</span>
                  <span>4.9</span>
                </div>
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">Atmosphere Kitchen</h3>
                <p className="restaurant-desc">Molecular Gastronomy • 15-20 min</p>
                <div className="restaurant-tags">
                  <span className="tag tag-primary">Free Delivery</span>
                  <span className="tag tag-secondary">Cloud-Prime</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel restaurant-card">
              <div className="restaurant-img-wrapper">
                <img className="restaurant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq_0YIMCS3a6DUFACAX1RcQy4FijFxJIts1Zd0d2YghaS411pGulB43T4Q0MZyEKPXrmenfpDyCeIVAXocdgpbQ881y-RWthJ32lhgydEajo_IByFlzQfWkpT9S77-mutnHLPJkEEzejjao66NiBzJwdfnu1qw6f1hdU9vO-KnHGhMaqYPKbf6zEQPmmyKDaOCSnkS0bZZi8sbeY6_vLLnebmP_5QwbD_mMyPBTqZzQzIeCS74aFmPYT-nWNeEKZWbBxcEP4ND6Sc" alt="Zenith Rolls" />
                <div className="glass-panel rating-badge">
                  <span className="material-symbols-outlined rating-icon">star</span>
                  <span>4.8</span>
                </div>
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">Zenith Rolls</h3>
                <p className="restaurant-desc">Artisanal Sushi • 25-30 min</p>
                <div className="restaurant-tags">
                  <span className="tag tag-primary">Popular</span>
                  <span className="tag tag-tertiary">Vegan Options</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel restaurant-card">
              <div className="restaurant-img-wrapper">
                <img className="restaurant-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7opFWrOjHUsBa4ql67rdM3VZ_ruL49R8hKJH9h1GVD1thtqmayf6WGypCmjglNP8amIOIfHWCWyAdG-hrebS4lPIYRKCFMggL-TdApkc7aRB75WYCD6OFYDst--DP-2AG-9MRWPMWXnrYxsZeVxTu0hDvgbH2ck0XL6Xg6h-Gqqcl-Iaa3zOBkNIuiOzL1EIbGm-kG-mSw752EmSMAUZ_pPX5L_POHv5EMvi0fPtpBKyHWp223lpf9NMBE7C0uOnA7c27afSG0qo" alt="Altostratus Grill" />
                <div className="glass-panel rating-badge">
                  <span className="material-symbols-outlined rating-icon">star</span>
                  <span>4.7</span>
                </div>
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">Altostratus Grill</h3>
                <p className="restaurant-desc">Gourmet Burgers • 10-15 min</p>
                <div className="restaurant-tags">
                  <span className="tag tag-primary">Fastest</span>
                  <span className="tag tag-secondary">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Antigravity Loader */}
        <div className="loader-section">
          <div className="loader-circle"></div>
          <p className="loader-text">Weightless Engine Active</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-container" style={{ cursor: 'default', transform: 'none' }}>
              <span className="material-symbols-outlined logo-icon">cloud</span>
              <span className="logo-text">Neeta's Kitchen</span>
            </div>
            <p className="footer-desc">
              Redefining the horizon of food delivery. Ethereal taste, delivered at terminal velocity with zero friction.
            </p>
            <div className="footer-socials">
              <span className="material-symbols-outlined social-icon">public</span>
              <span className="material-symbols-outlined social-icon">hub</span>
              <span className="material-symbols-outlined social-icon">rocket</span>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Explore Restaurants</a></li>
                <li><a href="#" className="footer-link">Become a Partner</a></li>
                <li><a href="#" className="footer-link">Sustainability</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Terms of Flight</a></li>
                <li><a href="#" className="footer-link">Privacy Shield</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Neeta's Kitchen Antigravity Dining. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

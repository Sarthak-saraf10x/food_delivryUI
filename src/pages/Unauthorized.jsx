import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0b0e1a',
    color: '#fff',
    gap: '1rem',
    padding: '2rem',
    textAlign: 'center',
  }}>
    <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#ff8080' }}>
      block
    </span>
    <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Access Denied</h1>
    <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '360px' }}>
      You don't have permission to view this page. Please log in with the correct account.
    </p>
    <Link
      to="/admin/login"
      style={{
        marginTop: '0.5rem',
        padding: '0.75rem 1.75rem',
        background: 'linear-gradient(135deg, #00629d, #7212ff)',
        color: '#fff',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '0.95rem',
      }}
    >
      Go to Admin Login
    </Link>
  </div>
);

export default Unauthorized;

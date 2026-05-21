import { useAuth } from '../context/AuthContext';

const AdminOverview = () => {
  const { user } = useAuth();
  const restaurantId = localStorage.getItem('restaurantId');

  const statCards = [
    { icon: 'receipt_long', label: 'Total Orders', value: '—', color: '#00a3ff' },
    { icon: 'payments', label: "Today's Revenue", value: '—', color: '#a855f7' },
    { icon: 'star', label: 'Avg. Rating', value: '—', color: '#f59e0b' },
    { icon: 'menu_book', label: 'Menu Items', value: '—', color: '#4ade80' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Welcome banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,98,157,0.25), rgba(114,18,255,0.2))',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '1.75rem 2rem',
      }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
          Welcome back, {user?.name?.split(' ')[0] || 'Admin'} 👋
        </h2>
        <p style={{ margin: '0.4rem 0 0', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          Restaurant ID: <code style={{ color: '#00a3ff', fontSize: '0.8rem' }}>{restaurantId || 'Not set'}</code>
        </p>
      </div>

      {/* Stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
      }}>
        {statCards.map(({ icon, label, value, color }) => (
          <div key={label} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            <span className="material-symbols-outlined" style={{ color, fontSize: '1.6rem' }}>
              {icon}
            </span>
            <div>
              <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>{value}</p>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder notice */}
      <div style={{
        background: 'rgba(0,163,255,0.06)',
        border: '1px dashed rgba(0,163,255,0.25)',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.9rem',
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#00a3ff', display: 'block', marginBottom: '0.5rem' }}>
          construction
        </span>
        Dashboard analytics and order management coming in the next phase.
      </div>
    </div>
  );
};

export default AdminOverview;

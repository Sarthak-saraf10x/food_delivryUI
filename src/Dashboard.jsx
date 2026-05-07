import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user?.role || 'User';

  return (
    <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
      <h1>{role === 'restaurant_owner' ? 'Restaurant' : 'Delivery Partner'} Dashboard</h1>
      <p>Welcome to your dashboard! Features coming soon.</p>
    </div>
  );
};

export default Dashboard;

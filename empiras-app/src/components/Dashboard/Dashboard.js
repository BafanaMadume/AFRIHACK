import React from 'react';

const Dashboard = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
    backgroundColor: '#f0f0f0',
    color: '#333',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const cardStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Dashboard</h1>
      
      <div style={cardStyle}>
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can view your statistics and manage your account.</p>
      </div>
      
      <div style={cardStyle}>
        <h2>Feature 1</h2>
        <p>View and manage properties.</p>
      </div>

      <div style={cardStyle}>
        <h2>Feature 2</h2>
        <p>Manage tenants and payments.</p>
      </div>
    </div>
  );
};

export default Dashboard;

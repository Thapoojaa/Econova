import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div style={styles.container}>
      <h2>User Dashboard</h2>
      <p>Welcome, {name || 'User'}!</p>
      <p>Email: {email}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '150px',
    textAlign: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: '10px',
    minHeight: '200vh',
    color: '#2d6a4f',
  }
};

export default UserDashboard;

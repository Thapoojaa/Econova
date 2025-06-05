import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {name || 'Admin'}!</p>
      <p>Email: {email}</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#fff0f5',
    minHeight: '100vh',
    color: '#5a189a'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#5a189a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default AdminDashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@econova.com' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign-In clicked (integration coming soon)');
    // In a real app, this would use Firebase or OAuth for Google login
    navigate('/user-dashboard');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to Econova</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={{ marginTop: '20px', color: '#555' }}>Or</p>

      <button onClick={handleGoogleSignIn} style={styles.googleButton}>
        Sign in with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    background: '#e6f7e6',
    borderRadius: '10px',
    width: '320px',
    margin: '100px auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  title: {
    color: '#2d6a4f',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  googleButton: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#DB4437',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default LoginPage;

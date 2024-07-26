import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CompletedStories from './pages/CompletedStories';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StoryDetails from './components/Story/StoryDetails';
import { useAuth } from './context/AuthContex';

const App = () => {
  const { user, logout } = useAuth();

  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.brand}>Collaborative Story Creator</Link>
          <div style={styles.navLinks}>
            {user ? (
              <>
                <Link to="/completed" style={styles.link}>Completed Stories</Link>
                <button onClick={logout} style={styles.logoutButton}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" style={styles.link}>Login</Link>
                <Link to="/register" style={styles.registerButton}>Register</Link>
              </>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/story/:id" element={<StoryDetails stories={[]} />} />
          <Route path="/completed" element={<CompletedStories stories={[]} />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
    marginBottom: '2rem',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#007bff',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginRight: '1rem',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#007bff',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#0056b3',
  },
  registerButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default App;

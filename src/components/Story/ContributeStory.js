import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ContributeStory = ({ story, addContribution }) => {
  const [sentence, setSentence] = useState('');
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContribution(story.id, { text: sentence, author: user.email });
    setSentence('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Contribute to Story</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <textarea
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Your Contribution"
            required
            style={styles.textarea}
          />
          <button
            type="submit"
            style={styles.button}
          >
            Add Contribution
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #34d399, #2d9cdb)',
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2d9cdb',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical',
    minHeight: '100px',
    transition: 'border-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    ':focus': {
      borderColor: '#34d399',
      transform: 'scale(1.02)',
    },
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#34d399',
    color: 'white',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    ':hover': {
      backgroundColor: '#2d9cdb',
      transform: 'scale(1.02)',
    },
  },
};

export default ContributeStory;

import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';

import {useAuth} from '../../context/AuthContex'

const CreateStory = ({ addStory }) => {
  const [title, setTitle] = useState('');
  const [firstSentence, setFirstSentence] = useState('');
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: Date.now(),
      title,
      sentences: [{ text: firstSentence, author: user.email }],
      completed: false,
    };
    addStory(newStory);
    setTitle('');
    setFirstSentence('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Start a New Story</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="title" style={styles.label}>Story Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter story title"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="firstSentence" style={styles.label}>First Sentence</label>
            <textarea
              id="firstSentence"
              value={firstSentence}
              onChange={(e) => setFirstSentence(e.target.value)}
              placeholder="Enter the first sentence"
              required
              style={styles.textarea}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
          >
            Create Story
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
    background: 'linear-gradient(to right, #7f5fc5, #8c6ff1)',
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
    color: '#7f5fc5',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
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
    transition: 'border-color 0.3s ease-in-out',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#7f5fc5',
    color: 'white',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
  },
};

export default CreateStory;

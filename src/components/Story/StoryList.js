import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({ stories }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Ongoing Stories</h2>
      <ul style={styles.list}>
        {stories.map((story) => (
          <li key={story.id} style={styles.item}>
            <Link to={`/story/${story.id}`} style={styles.link}>{story.title}</Link>
            <p style={styles.contributions}>Contributions: {story.sentences.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '1rem',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#7f5fc5',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  item: {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    cursor: 'pointer',
  },
  link: {
    fontSize: '1.25rem',
    color: '#7f5fc5',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.2s ease-in-out',
  },
  contributions: {
    fontSize: '0.875rem',
    color: '#555',
  },
};

export default StoryList;

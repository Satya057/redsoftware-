import React, { useState } from 'react';
import { useAuth } from '../context/AuthContex';
import CreateStory from '../components/Story/CreateStory';
import StoryList from '../components/Story/StoryList';

const Home = () => {
  const { user } = useAuth();
  const [stories, setStories] = useState([]);

  const addStory = (newStory) => {
    setStories([...stories, newStory]);
  };

  const addContribution = (id, newSentence) => {
    setStories(stories.map(story =>
      story.id === id
        ? { ...story, sentences: [...story.sentences, newSentence] }
        : story
    ));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.welcome}>
        Welcome, {user ? user.email : 'Guest'}!
      </h1>
      {user && <CreateStory addStory={addStory} />}
      <StoryList stories={stories} />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  welcome: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#7f5fc5',
  },
};

export default Home;

import React, { useState } from 'react';
import scoreWord from '../services/apiService';
import styles from '../ScoreWordForm.module.css';


const ScoreWordForm = () => {
  const [word, setWord] = useState('');
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await scoreWord(word);
      setScore(result.score);
      setError(null);
    } catch (error) {
      setError(error.message);
      setScore(null);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Score Word</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a word:
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
            className={styles.formInput} // Ensure correct class name
          />
        </label>
        <button type="submit" className={styles.formButton}>
          Score
        </button>
      </form>
      {score !== null && (
        <div className={styles.resultContainer}>
          <p>Score: {score}</p>
        </div>
      )}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
};

export default ScoreWordForm;

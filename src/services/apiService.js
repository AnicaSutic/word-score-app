// src/apiService.js
import axios from 'axios';

const { API_URL } = require('../config/config');

const scoreWord = async (word) => {
    try {
      const response = await axios.post(`${API_URL}/score`, { word });

      console.log(response);
  
      if (response.status === 200) {
        return response.data; // Return word and score if successful
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('Word not found in dictionary');
      } else {
        throw new Error('Failed to score word'); // Handle other errors
      }
    }
  };
  
  export default scoreWord;
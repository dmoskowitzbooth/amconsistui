// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Adjust the URL to match your Rails API base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;

const express = require('express');
const Opreation_Router = express.Router();
const ConnectionModule = require('./DataBaseConnection'); // Ensure this is correctly configured

// Define the GET route to fetch data from the 'userregister' table
Opreation_Router.get('/userData', (req, res) => {
  const query = 'SELECT * FROM userregister'; // SQL query to fetch all data from userregister table

  ConnectionModule.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data from database' });
    } else {
      res.status(200).json(results); // Send the fetched data as JSON response
      console.log("Fetched")
    }
  });
});

// Export the router to be used in index.js
module.exports = Opreation_Router;

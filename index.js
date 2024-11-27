// index.js
var express = require('express');
var cors = require('cors');
var app = express();

// Import the Opreation_Router from FetchingandPostCode.js
var Opreation_Router = require('./FetchingandPostCode');

// Enable CORS for all routes
app.use(cors());

// Middleware to handle JSON requests (for POST requests)
app.use(express.json());

// Home route (welcome message)
app.get('/', (req, res) => {
  res.send('Welcome to The Backend Code');
});

// Use the operation router under the "/api" prefix
app.use('/api', Opreation_Router);  // All routes defined in Opreation_Router will now be accessible via /api

// Start the server
const port = 4100;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

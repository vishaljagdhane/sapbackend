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
  res.send(`
   <h1>Welcome to The Backend Code</h1>

<div style="position: relative; width: 90%; text-align: left; padding: 10px; background-color: #f4f4f9;">
  <h2>Check out the <br> <a href="/api/userData" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 600;">User Get API</a></h2>
  <br />
  </div>

<div style="position: relative; width: 90%; text-align: left; padding: 10px; background-color: #f4f4f9;">
  <h2>Check out the <br><a href="/api/userRegistration" target="_blank" style="color: #007bff; text-decoration: none; font-weight: 600;">User Register Post API</a></h2>
  <br />
  </div>
 


<h2 style="text-align: center; color: #333;">Please use the above APIs for testing</h2>
  `);
});

// Use the operation router under the "/api" prefix
app.use('/api', Opreation_Router);  // All routes defined in Opreation_Router will now be accessible via /api

// Start the server
const port = 4100;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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
//user Registration Api 
Opreation_Router.post('/userRegistration',(req,res)=>{
  const {fname,lname,email,mobile,password}=req.body;

  if(!fname || !lname || !email || !mobile || !password){
    res.status(400).json({ error: 'All fields are required' });
  }

  const insertQuery = 'INSERT INTO userregister (fname, lname, email, mobile, password) VALUES (?, ?, ?, ?, ?)';

  ConnectionModule.query(insertQuery,[fname, lname, email, mobile, password], (error, results)=>{
    if(error){
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Failed to insert data into database' });
    }else{
      res.status(200).json({ message: 'User registration successful' });
      console.log("Inserted")
    }
  })
})

Opreation_Router.post('/LoginUser', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // SQL query to check if the username (email or mobile) and password match any record
  const query = `
    SELECT * FROM userregister 
    WHERE (email = ? OR mobile = ?) AND password = ?
  `;

  ConnectionModule.query(query, [username, username, password], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      return res.status(500).json({ error: 'Database query failed' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Assuming user is authenticated, you can send back user details or a token.
    return res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});


// Export the router to be used in index.js
module.exports = Opreation_Router;

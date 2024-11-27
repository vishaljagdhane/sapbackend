// db.js
var mysql = require('mysql');

// Create a MySQL connection
var ConnectionModule = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "code_sap"  // Use "database" instead of "dbname" for the correct configuration option
});

// Establish connection and handle errors
ConnectionModule.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Export the connection to be used in other files
module.exports = ConnectionModule;

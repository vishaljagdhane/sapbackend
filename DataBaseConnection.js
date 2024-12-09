// db.js
var mysql = require('mysql');

//Connection Variables
const DB_Hotsing ='localhost';
const DB_userName= 'root';
const DB_password= '';
const DB_databaseName='code_sap'


// Create a MySQL connection
var ConnectionModule = mysql.createConnection({
  host: DB_Hotsing,
  user: DB_userName,
  password: DB_password,
  database:  DB_databaseName // Use "database" instead of "dbname" for the correct configuration option
});

// Establish connection and handle errors
ConnectionModule.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Export the connection to be used in other files
module.exports = ConnectionModule;

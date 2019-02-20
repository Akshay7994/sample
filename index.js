var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "mfstreet.c1acyjmzule5.ap-south-1.rds.amazonaws.com",
  user     : "mf123",
  password : "mfstreet123",
  port     : "3306"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
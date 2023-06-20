const mysql = require('mysql2');

const config = {
  host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: 'Ctp4ibJYDsXfrKw.root',
  password: 'lBA49UXyRHb1qvHg',
  database: 'IdeaHub',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: false
  }
}

const connection = mysql.createConnection(config)
 
connection.connect(function(err) {
    if (err) throw(err);
    console.log("Connected!");
});

connection.query('SELECT * FROM USERS', (err, rows) => {
  console.log(rows);
});
"use strict";

let mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root', // Replace with your database username
    password: '',      // Replace with your database password
    // // Replace with your database Name
    port:3306
});
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;
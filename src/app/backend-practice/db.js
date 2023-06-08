const mysql = require('mysql');

const con = mysql.createConnection({
    connectionLimit: 10,
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'enquiry'
});

module.exports = con;

var mysql = require('mysql')
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'football_info',
    port:3306,
})

module.exports=db;
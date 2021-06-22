const mysql = require('mysql');

const connectionConfig = {
  host     : 'mysql-fcc-buap-md.alwaysdata.net',
  user     : '237098',
  password : '237098201748133',
  database : 'fcc-buap-md_database'
};
// const connectionConfig = {
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'ss_hospital'
// };



const mysqlConnection = mysql.createConnection( connectionConfig );

mysqlConnection.connect((err)=>{
  if(err) return;
  console.log('DB connected');
}); 


module.exports = mysqlConnection;
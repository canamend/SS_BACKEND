const mysql      = require('mysql');

const connectionConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ss_hospital'
};



const mysqlConnection = mysql.createConnection( connectionConfig );

mysqlConnection.connect((err)=>{
  if(err) return;
  console.log('DB connected');
}); 


module.exports = mysqlConnection;
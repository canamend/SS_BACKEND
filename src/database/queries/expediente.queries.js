const mysqlConnection = require('../config.db');
const getExpediente = (no_expediente)=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM expediente WHERE no_expediente=?";
        mysqlConnection.query(query, [no_expediente], (err, result)=>{
            if(err) reject(err)
            else resolve(result[0] || null)
        });
    });
}

module.exports = {
    getExpediente
}
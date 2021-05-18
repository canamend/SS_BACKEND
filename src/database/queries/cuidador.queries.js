const mysqlConnection = require('../config.db');

const getCuidador = (id_cuidador)=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM cuidador WHERE id_cuidador=?";
        mysqlConnection.query(query, [id_cuidador], (err, result)=>{
            if(err) reject(err)
            else resolve(result[0] || null)
        });
    });
}

module.exports = {
    getCuidador
}
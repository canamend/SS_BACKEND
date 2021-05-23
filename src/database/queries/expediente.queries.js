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

const saveExpediente = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO expediente(no_expediente, id_admin, disponible) VALUES(?,?,?)";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else {
                resolve('Expediente registrado con exito');
            }
        })
    });
}

module.exports = {
    getExpediente,
    saveExpediente
}
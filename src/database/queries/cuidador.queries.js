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

const saveCuidador = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO cuidador (nombre_completo, parentesco, genero, telefono) VALUES (?,?,?,?)";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else {
                resolve(row.insertId);
            }
        })
    });
}

module.exports = {
    getCuidador,
    saveCuidador
}
const mysqlConnection = require("../config.db");



/**
 * Obtener una cuenta de la base de datos.
 * @param {string} usuario
 * @returns Promesa con la cuenta si esta existe, null en caso contrario.
 * La promesa es rechazada en caso de un error interno.
 */
const getUser = (usuario='')=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * from cuenta WHERE usuario=?";
        mysqlConnection.query(query,[usuario], (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null);
        })
    });
}

const duplicated = (usuario='') => {
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * from personas WHERE usuario=?";
        mysqlConnection.query(query,[usuario], (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null);
        })
    });
}

module.exports = {
    getUser, 
    duplicated
}
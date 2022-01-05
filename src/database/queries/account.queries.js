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

/***
 * borrar una cuenta en la base de datos.
 */
 const deleteAccount = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "DELETE FROM cuenta WHERE usuario=?";
        mysqlConnection.query(query, data, (err, row)=>{
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

/***
 * Guardar una cuenta en la base de datos.
 */
const saveAccount = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO cuenta (usuario, contrasenia, rol) VALUES (?,?,?)";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null);
        })
    });
}

/***
 * Guardar una cuenta en la base de datos.
 */
const savePatient = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO cuenta (usuario, contrasenia, rol) VALUES (?,?,?)";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null);
        })
    });
}

module.exports = {
    getUser, 
    duplicated, 
    saveAccount,
    deleteAccount,
    savePatient
}
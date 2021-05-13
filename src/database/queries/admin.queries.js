const mysqlConnection = require('../config.db');


const saveAdmin = (...adminData)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO administrador (nombre, ap_paterno, ap_materno, genero, f_nacimiento, usuario) VALUES(?,?,?,?,?,?)";
        mysqlConnection.query(query, adminData, (err, result)=>{
            if(err) reject(err)
            else resolve('Registro guardado correctamente')
        })
    });
}

module.exports = {
    saveAdmin
}
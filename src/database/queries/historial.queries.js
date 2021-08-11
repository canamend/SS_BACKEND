const mysqlConnection = require('../config.db');


const saveHistorial = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO `historial`(`id_test`, `id_paciente`, `id_admin`, `f_asignacion`) VALUES (?,?,?,?)";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else {
                resolve('Historial registrado con exito');
            }
        })
    });
}

const getHistorial = ( id_user)=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM historial WHERE id_paciente=?";
        mysqlConnection.query(query, [id_user], (err, row)=>{
            if(err) reject(err)
            else resolve(row[0] || null)
        });
    });
} 

module.exports = {
    getHistorial,
    saveHistorial
}
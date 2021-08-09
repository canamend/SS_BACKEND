const mysqlConnection = require('../config.db');

const getHistorial = (id_paciente)=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM historial WHERE id_paciente=?";
        mysqlConnection.query(query, [id_paciente], (err, result)=>{
            if(err) reject(err)
            else resolve(result[0] || null)
        });
    });
} 

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


module.exports = {
    getHistorial,
    saveHistorial
}
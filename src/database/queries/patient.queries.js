const mysqlConnection = require('../config.db');

const savePatient = (...patientData)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO paciente (id_paciente, nombre, ap_paterno, ap_materno, genero, f_nacimiento, no_expediente, id_cuidador, usuario) VALUES(?,?,?,?,?,?,?,?,?)";
        mysqlConnection.query(query, patientData, (err, result)=>{
            if(err) reject(err)
            else resolve('Registro guardado correctamente')
        });
    });
} 


module.exports = {
    savePatient
}
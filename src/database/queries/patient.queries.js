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

const getPatient = ( user)=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * from paciente WHERE usuario=?";
        mysqlConnection.query(query, [user], (err, row)=>{
            if(err) reject(err)
            else resolve(row[0] || null)
        });
    });
} 

const getPatients = ()=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM paciente";
        mysqlConnection.query(query, (err, row)=>{
            if(err) reject(err)
            else resolve(row)
        });
    });
} 

/***
 * borrar un paciente en la base de datos.
 */
 const deletePatient = (username)=>{
    return new Promise( (resolve, reject)=>{
        const query = "DELETE FROM paciente WHERE usuario=?";
        mysqlConnection.query(query, [username], (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null)
        })
    });
}

module.exports = {
    savePatient,
    getPatient,
    getPatients,
    deletePatient
}
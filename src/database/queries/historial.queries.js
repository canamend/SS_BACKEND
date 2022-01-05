const { response } = require('express');
const mysqlConnection = require('../config.db');

const getHistoriales = ()=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM historial";
        mysqlConnection.query(query, (err, row)=>{
            if(err) reject(err)
            else resolve(row)
        });
    });
} 

const getHistorial = ( patientId ) =>{
    return new Promise( (resolve, reject)=>{
        const query = 'SELECT * FROM historial WHERE id_paciente=?';
        mysqlConnection.query(query, [patientId], (err, row)=>{
            if(err) reject(err)
            else resolve(row)
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

const updateHistorial = async (...data)=>{
    return new Promise( (resolve, reject)=>{
        const query ="UPDATE historial SET puntaje=?, f_fin=?, p1=?, p2=?, p3=?, p4=?, p5=?, p6=? WHERE id_historial=? AND id_paciente=?";
        mysqlConnection.query(query, data, (err, row)=>{
            if(err) reject(err);
            else {
                resolve('Historial actualizado con exito');
            }
        })
    });
}



module.exports = {
    getHistoriales,
    getHistorial,
    saveHistorial,
    updateHistorial
}
const { response } = require('express');
const mysqlConnection = require('../config.db');


const getTiposRespuestas = ()=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM respuestas";
        mysqlConnection.query(query, (err, row)=>{
            if(err) reject(err)
            else resolve(row)
        });
    });
}

const saveRespuesta = (... respuestaData)=>{
    return new Promise( (resolve, reject)=>{
        const query= "INSERT INTO respuestas (opcion, puntos, tipo_respuestas, url_imagen) VALUES (?,?,?,?)"
        mysqlConnection.query(query, respuestaData, (err, result)=>{
            if(err) reject(err);
            else resolve('Respuesta guardada correctamente')
        })
    });
}

module.exports = {
    getTiposRespuestas,
    saveRespuesta
}

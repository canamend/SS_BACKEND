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

module.exports = {
    getTiposRespuestas
}

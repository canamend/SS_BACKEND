const { response } = require('express');
const mysqlConnection = require('../config.db');

const getTest = testId =>{
    return new Promise( (resolve, reject)=>{
        const query = 'SELECT * FROM test WHERE id_test=?';
        mysqlConnection.query(query, [testId], (err, data)=>{
            if(err) reject(err)
            else resolve(data[0] || null)
        });
    });
}

const getTests = ()=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * FROM test";
        mysqlConnection.query(query, (err, row)=>{
            if(err) reject(err)
            else resolve(row)
        });
    });
} 

const getTestQuestions = testId =>{
    return new Promise( (resolve, reject)=>{
        const query = 'SELECT * FROM preguntas WHERE id_test=?';
        mysqlConnection.query(query, [testId], (err, data)=>{
            if(err) reject(err);
            else {
                const response = data.length > 0 ? data: null;
                resolve(response)
            }
        });
    });
}
const getAnswers = (answersTypes=[]) =>{
    return new Promise( (resolve, reject)=>{
        const query = 'SELECT * FROM respuestas WHERE tipo_respuestas IN (?)';
        mysqlConnection.query(query, [answersTypes], (err, data)=>{
            if(err) reject(err);
            else {
                const response = data.length > 0 ? data: null;
                resolve(response)
            }
        });
    });
}

module.exports = {
    getTest,
    getTests,
    getTestQuestions,
    getAnswers
}
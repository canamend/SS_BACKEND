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

const saveTest = (...testData)=>{
    return new Promise( (resolve, reject)=>{
        const query = "INSERT INTO test (id_test, nombre, keyword, enfoque) VALUES(?,?,?,?)";
        mysqlConnection.query(query, testData, (err, result)=>{
            if(err) reject(err);
            else resolve('Test guardado correctamente')
        })
    });
}

const saveQuestion = (... questionData)=>{
    return new Promise( (resolve, reject)=>{
        const query= "INSERT INTO preguntas (id_pregunta, nombre, descripcion, id_test, tipo_respuestas, url_imagen) VALUES (?,?,?,?,?,?)"
        mysqlConnection.query(query, questionData, (err, result)=>{
            if(err) reject(err);
            else resolve('Pregunta guardada correctamente')
        })
    });
}

module.exports = {
    getTest,
    getTests,
    getTestQuestions,
    getAnswers,
    saveTest,
    saveQuestion
}
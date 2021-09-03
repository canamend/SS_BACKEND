const { request, response } = require("express");
const { getTest, getTestQuestions, getAnswers, getTests } = require("../database/queries/test.queries");
const testGet = async (req=request, res=response)=>{
    const { testid } = req.params;
    try {
        const test = await getTest(testid);
        if(!test){
            return res.status(404).json({
                msg: 'Test no encontrado'
            })
        }
        const questions = await getTestQuestions(testid);
        
        // Obtener un arreglo con los diferentes tipos de respuestas.
        const tiposRespuestas = []
        questions.forEach( ({tipo_respuestas}) => {
            if(!tiposRespuestas.includes(tipo_respuestas)){
                tiposRespuestas.push(tipo_respuestas)
            }
        });
        // Obtener las respuestas de la base de datos
        const answers = await getAnswers(tiposRespuestas);

        res.json({
            ...test,
            questions,
            answers: getAnswersObj(answers)
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

// Crear un objeto de respuestas, donde cada tipo de respuesta tenga su arreglo de respuestas.
const getAnswersObj = (answers=[])=>{
    const answersObj = {};
    answers.forEach( answer =>{
        if(answersObj[answer.tipo_respuestas]){
            answersObj[answer.tipo_respuestas].push( answer)
        }else{
            answersObj[answer.tipo_respuestas] = [answer]
        }
    });
    return answersObj;
}

const testsGet = async (req= request, res=response)=>{
    try{
        const tests = await getTests();
        res.json(tests)
    }catch(error){
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    testGet,
    testsGet
}
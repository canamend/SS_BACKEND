const { getTests } = require("../database/queries/test.queries");

// Verficar si ya existe un test con la palabra clave
const existTest = async (keyword)=>{
    const tests = await getTests();
    console.log(tests);
    /*if(tests.) {
        throw new Error('El test YA existe');
    }*/
}

const containsPreguntas = (questions) =>{
    console.log(questions);
}

module.exports = {
    existTest,
    containsPreguntas
}
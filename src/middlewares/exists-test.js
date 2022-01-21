const { getTests } = require("../database/queries/test.queries");

// Verficar si ya existe una cuenta registrada con el usuario dado. Al crear una cuenta.
const existTest = async (keyword)=>{
    const tests = await getTests();
    console.log(tests);
    /*if(tests.) {
        throw new Error('La cuenta YA existe');
    }*/
}

const containsPreguntas = (questions) =>{
    console.log(questions);
}

module.exports = {
    existTest,
    containsPreguntas
}
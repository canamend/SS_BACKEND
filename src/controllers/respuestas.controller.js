const { request, response } = require("express");
const { getTiposRespuestas } = require("../database/queries/respuestas.queries");

const tiposRespuestasGet = async (req= request, res=response)=>{
    try{
        const respuestas = await getTiposRespuestas();
        res.json(respuestas)
    }catch(error){
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    tiposRespuestasGet,
}
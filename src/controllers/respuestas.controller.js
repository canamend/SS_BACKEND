const { request, response } = require("express");
const { getTiposRespuestas, saveRespuesta } = require("../database/queries/respuestas.queries");

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

const respuestasPost = async (req=req, res=Res)=>{
    const respuestas  = req.body; //req.body.respuestas
    try{
        respuestas.forEach( async respuesta => {
            const response = await saveRespuesta(
                respuesta.opcion,
                respuesta.puntos,
                respuesta.tipo_respuestas,
                respuesta.url_imagen
            );
            
        });
        res.status(200).json({
            msg: response
        });
    }catch(error){
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    tiposRespuestasGet,
    respuestasPost
}
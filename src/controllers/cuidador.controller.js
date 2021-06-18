const { request, response } = require("express");
const { saveCuidador, getCuidador } = require("../database/queries/cuidador.queries");

const cuidadorGet = async (req=request, res=response)=>{
    const { id_cuidador } = req.params;

    try{
        const responseQuery = await getCuidador(id_cuidador);
        if(!responseQuery) return res.status(404).json({
            msg: 'Carer not found'
        })
        res.json(responseQuery);
    }catch(error){
        res.status(500).json({msg: error})
    }
};

const cuidadorPost = async (req=request, res=response)=>{
    const { nombre, parentesco, genero, telefono } = req.body;

    try {
        const responseQuery = await saveCuidador(nombre, parentesco, genero, telefono)
        res.json({ insertId: responseQuery })
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports={
    cuidadorPost,
    cuidadorGet
}
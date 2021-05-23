const { request, response } = require("express");
const { saveCuidador } = require("../database/queries/cuidador.queries");


const cuidadorPost = async (req=request, res=response)=>{
    const { nombre, parentesco, genero, telefono } = req.body;
    // console.log(nombre, parentesco, genero, telefono);

    try {
        const responseQuery = await saveCuidador(nombre, parentesco, genero, telefono)
        res.json({ insertId: responseQuery })
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports={
    cuidadorPost
}
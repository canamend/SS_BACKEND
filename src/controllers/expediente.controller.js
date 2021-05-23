const { request, response } = require("express");
const { saveExpediente } = require("../database/queries/expediente.queries");


const expedientePost = async (req=request, res=response )=>{
    const { expediente, id_admin, disponible } = req.body;
    try {
        const responseQuery = await saveExpediente(expediente, id_admin, disponible);
        res.json({ msg: responseQuery })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

module.exports = {
    expedientePost
}
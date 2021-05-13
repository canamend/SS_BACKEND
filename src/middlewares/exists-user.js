const { request, response } = require("express");
const { getUser } = require("../database/queries/account.queries");

// Verficar si ya existe una cuenta registrada con el usuario dado.
const existsUser = async (req=request, res=response, next)=>{
    const { usuario } = req.body;
    console.log(req.body);
    const cuenta = await getUser(usuario);
    if(cuenta) {
        return res.status(400).json({ 
            msg: "Ya existe una cuenta registrada"
        })
    }
    next();
}

module.exports = {
    existsUser
}
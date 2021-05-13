const { response, request } = require('express');

const { getUser } = require("../database/queries/account.queries");

/**
 * Middleware que maneja una petición GET para obtener una cuenta de la base datos.
 * @param {response} req 
 * @param {request} res 
 * @returns void
 */
const accountGet = async (req, res)=>{
    const { usuario } = req.params;
    try {
        getUser()
        const user = await getUser(usuario);
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({
            msg: "Ocurrió un error al procesar la consulta"
        });
    }
}

const accountPost = (req, res)=>{
    console.log(req.body);
    res.status(200).json({
        msg: 'account post xd'
    })
}

module.exports = {
    accountGet,
    accountPost
}
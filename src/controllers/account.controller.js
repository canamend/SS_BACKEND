const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { getUser, saveAccount } = require("../database/queries/account.queries");
const { generateJWT } = require('../helpers/jsonwebtoken');

/**
 * Middleware que maneja una petición GET para obtener una cuenta de la base datos.
 * @param {response} req 
 * @param {request} res 
 * @returns void
 */
const accountGet = async (req, res)=>{
    const { usuario } = req.params;
    try {
        const user = await getUser(usuario);
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({
            msg: "Ocurrió un error al procesar la consulta"
        });
    }
}

const accountPost = async (req, res)=>{

    const { usuario, contrasenia, rol } = req.body;
    try {
        await saveAccount(usuario, contrasenia, rol);
        res.json({
            msg: 'Cuenta registrada :D'
        })
    } catch (error) {
        res.status(500).json({ msg: error});
    }
}

const login = async (req=request, res=response)=>{
    const { usuario, contrasenia } = req.body;
    try{
        const user = await getUser(usuario);
        if(!user){
            return res.status(400).json({ msg: 'Usuario no registrado'})
        }
        const { rol } = user;
        if(contrasenia != user.contrasenia){
            return res.status(400).json({ msg: 'La contraseña es incorrecta'})
        }
        const token = await generateJWT(usuario);

        res.status(200).json({
            rol,
            usuario,
            token
        })
    }catch(error){
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    accountGet,
    accountPost,
    login
}
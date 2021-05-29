const { request, response } = require("express");
const jwt = require('jsonwebtoken');

const validateToken = (req=request, res=response, next)=>{
    const { authorization } = req.headers;
    if(!authorization){
        return res.status(401).json({ msg: 'Acceso denegado' });
    }
    try {
        const token = authorization.replace('Bearer ','');
        const tokenDecoded = jwt.verify(token, process.env.PRIVATE_KEY);
        // Agregar al objeto de solicitud el nombre del usuario.
        req.user = tokenDecoded.usuario;
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Token no válido'})
    }
}

module.exports = {
    validateToken
}
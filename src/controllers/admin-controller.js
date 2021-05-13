const Req = require('express').request;
const Res = require('express').response;

const { saveAdmin } = require('../database/queries/admin.queries');

const adminGet = (req=Req, res=Res)=>{
    res.json({
      method: 'GET',
    })
}

const adminPost = async (req=Req, res=Res)=>{
    const { nombre, appaterno, apmaterno, genero, fnacimiento, usuario } = req.body;
    
    const response = await saveAdmin(nombre, appaterno, apmaterno, genero, fnacimiento, usuario);
    res.status(200).json({
        msg: response
    });

}

module.exports = {
    adminGet,
    adminPost
}
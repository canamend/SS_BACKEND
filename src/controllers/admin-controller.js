const Req = require('express').request;
const Res = require('express').response;

const { saveAdmin, getAdmin } = require('../database/queries/admin.queries');

const adminGet = async (req=Req, res=Res)=>{
    try {
        const { user='' } = req;
        const admin = await getAdmin(user);
        res.json(admin)
    } catch (error) {
        res.status(500).json({ msg: error})
    }
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
const { request, response } = require("express");
const { savePatient, getUser } = require("../database/queries/patient.queries");

const patientGet = async (req= request, res=response)=>{
    try {
        const { user='' } = req;
        const patient = await getUser(user);
        res.json(patient)
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const patientPost = async (req=request, res=response)=>{
    const { nombre, appaterno, apmaterno, genero, fnacimiento, usuario, id_cuidador, no_expediente } = req.body;
    try {
        await savePatient(null,nombre, appaterno,apmaterno, genero, fnacimiento, no_expediente,id_cuidador, usuario);
        res.json({
            msg: 'Paciente registrado :D'
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    patientGet,
    patientPost   
}
const { request, response } = require("express");
const { savePatient, getPatient, getPatients, deletePatient } = require("../database/queries/patient.queries");

// Obtener la información de un paciente. 
// Si se proporciona el nombre del usuario en los parámetros se realiza la búsqueda con base en dicho valor,
// en caso contrario, se toma el nombre de usuario del token
const patientGet = async (req= request, res=response)=>{
    try {
        const { user='' } = req;
        let { username } = req.params;
        
        // Si no existe el nombre de usuario en los parámetros, tomar el nombre de usuario del token.
        if(!username){
            username = user;
        }
        const patient = await getPatient(username);

        if(!patient) return res.status(404).json({
            msg: 'Patient not found'
        });

        res.json(patient)
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}
// const patientGetWithoutPermision;
const patientsGet = async (req= request, res=response)=>{
    try{
        const patients = await getPatients();
        res.json(patients)
    }catch(error){
        res.status(500).json({
            msg: error
        })
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

const patientDelete = async (req=request, res=response)=>{

    const { user='' } = req;
    let { username } = req.params;
    try {
        await deletePatient(username);
        res.json({
            msg: 'Cuenta borrada'
        })
    } catch (error) {
        res.status(500).json({ msg: error});
    }
}

module.exports = {
    patientGet,
    patientsGet,
    patientPost,
    patientDelete
}
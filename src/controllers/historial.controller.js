const { request, response } = require("express");
const { saveHistorial, getHistorial } = require("../database/queries/Historial.queries");


const historialPost = async (req=request, res=response )=>{
    const { id_test, id_paciente, id_admin, f_asignacion } = req.body;
    try {
        const responseQuery = await saveHistorial(id_test, id_paciente, id_admin, f_asignacion);
        res.json({ msg: responseQuery })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const historialGet = async (req=request, res=response)=>{
    try {
        //const { id_user='' } = req;
        let { id_user } = req.params;
        
        // Si no existe el nombre de usuario en los parámetros, tomar el nombre de usuario del token.
        //if(!id_usuario){
            //id_usuario = id_user;
        //}
        const patient = await getHistorial(id_user);

        if(!patient) return res.status(404).json({
            msg: 'Patient not found'
        });

        res.json(patient)
    } catch (error) {
        res.status(500).json({ msg: error})
    }

}

module.exports = {
    historialPost,
    historialGet
}
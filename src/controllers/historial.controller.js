const { request, response } = require("express");
const { getHistorial, getHistoriales, saveHistorial, updateHistorial } = require("../database/queries/historial.queries");

const historialGet = async (req=request, res=response)=>{
    try {
        const { patientid='' } = req.params;
        const historial = await getHistorial(patientid);
        
        if(!historial){
            return res.status(404).json({
                msg: 'Historial no encontrado'
            })
        }

        res.json(historial)
    } catch (error) {
        res.status(500).json({ msg: error})
    }

}

const historialesGet = async (req= request, res=response)=>{
    try{
        const historiales = await getHistoriales();
        res.json(historiales)
    }catch(error){
        res.status(500).json({
            msg: error
        })
    }
}

const historialPost = async (req=request, res=response )=>{
    const { id_test, id_paciente, id_admin, f_asignacion } = req.body;
    try {
        const responseQuery = await saveHistorial(id_test, id_paciente, id_admin, f_asignacion);
        res.json({ msg: responseQuery })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const historialUpdate = async (req=request, res=response )=>{
    const { puntaje, fecha_fin, p1, p2, p3, p4, p5, p6, historial_id, patient_id} = req.body;
    try {
        const responseQuery = await updateHistorial(puntaje, fecha_fin, p1, p2, p3, p4, p5, p6, historial_id, patient_id);
        res.json({ msg: responseQuery })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}


module.exports = {
    historialGet,
    historialesGet,
    historialPost,
    historialUpdate
}
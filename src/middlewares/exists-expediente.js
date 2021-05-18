const {getExpediente} = require("../database/queries/expediente.queries")

const existsExpediente = async (no_expediente)=>{
  const expediente = await getExpediente(no_expediente);
  if(!expediente){
    throw new Error('Expediente no resgistrado');
  }
  const { disponible=1 } = expediente;
  if(disponible == 0){
    throw new Error('Expediente ya está en uso');
  }
}

module.exports = {
    existsExpediente
}   
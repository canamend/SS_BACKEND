 const { getCuidador } = require("../database/queries/cuidador.queries");

 const existsCuidador = async (id_cuidador) =>{
   const cuidador = await getCuidador(id_cuidador);
   if(!cuidador){
     throw new Error('Cuidador no existe');
   }
 }

module.exports = {
  existsCuidador
}
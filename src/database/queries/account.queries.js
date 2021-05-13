const mysqlConnection = require("../config.db");



/**
 * Obtener un usuario de la base de datos.
 * @author Melquiades Bustamante <bonfil99melkia@gmail.com>
 * @param {string} usuario
 * @returns Promesa con el usuario si este existe, null en caso contrario.
 * La promesa es rechazada en caso de un error interno.
 */
const getUser = (usuario='')=>{
    return new Promise( (resolve, reject)=>{
        const query = "SELECT * from cuenta WHERE usuario=?";
        mysqlConnection.query(query,[usuario], (err, row)=>{
            if(err) reject(err);
            else resolve(row[0] || null);
        })
    });

}

module.exports = {
    getUser
}
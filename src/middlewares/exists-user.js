const { getUser, duplicated } = require("../database/queries/account.queries");

// Verficar si ya existe una cuenta registrada con el usuario dado. Al crear una cuenta.
const existsAccount = async (usuario)=>{
    console.log(usuario);
    const cuenta = await getUser(usuario);
    if(cuenta) {
        throw new Error('La cuenta YA existe');
    }
}

// Verficar si el usuario ya está registrado
const userAlreadyRegistered = async (usuario)=>{
    const cuenta = await getUser(usuario);
    if(!cuenta)
        throw new Error('El usuario no está registrado');
}
// Verifica si el usuario ya está asignado a algún paciente/administrador.
const duplicatedUser = async (usuario)=>{
    const user = await duplicated(usuario);
    if(user)
        throw new Error('La cuenta está en uso');
} 

module.exports = {
    existsAccount,
    userAlreadyRegistered, duplicatedUser
}
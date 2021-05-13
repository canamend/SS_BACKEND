const { validationResult } = require("express-validator");
const { response, request, next } = require('express');

/**
 * Middleware que extrae los errores de validación de la solicitud.
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 * @returns Código de estado 401(Bad request) si hay errores de validación.
 * En caso contrario se ejecuta la siguiente función de middleware.
 */
const validateFields = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // There are errors
        return res.status(400).json( errors );
    }
    next();
}



module.exports = validateFields;
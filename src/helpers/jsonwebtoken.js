const jwt = require('jsonwebtoken');

const generateJWT = (usuario='')=>{
    return new Promise( (resolve, reject)=>{
        const payload = { usuario };
        jwt.sign(payload, process.env.PRIVATE_KEY, {
            expiresIn: '4h'
        }, (err, token)=>{  
            if(err) reject("Couldn't generate token")
            else resolve(token);
        });
    });
}   

module.exports = {
    generateJWT
}
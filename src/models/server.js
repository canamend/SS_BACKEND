const express = require('express');
const cors = require('cors')
require('dotenv').config()

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.middleware();
        this.routes();
    }

    routes(){
        this.app.use('/account', require('../routes/account.route'));
        this.app.use('/admin', require('../routes/admin.route'));
        this.app.use('/patient', require('../routes/patient.route'));
        this.app.use('/cuidador', require('../routes/cuidador.route'));
        this.app.use('/expediente', require('../routes/expediente.route'));
        this.app.get('', (req, res)=>{
            res.json({
                msg: 'WELCOME!'
            })
        })
    }

    middleware(){
        this.app.use(cors())
        this.app.use( express.json() );
    }
    start(){
        this.app.listen(this.port, ()=>{
            console.log('Server listening at port', this.port);
        });
    }
}

module.exports = Server;
const express = require('express');

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
    }

    middleware(){
        this.app.use( express.json() );
    }
    start(){
        this.app.listen(this.port, ()=>{
            console.log('Server listening at port', this.port);
        });
    }
}

module.exports = Server;
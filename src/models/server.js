const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.adminPath = '/admin';
        this.accountPath = '/account';
        this.middleware();
        this.routes();
    }

    routes(){
        this.app.use(this.adminPath, require('../routes/admin.route'));
        this.app.use(this.accountPath, require('../routes/account.route'));
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
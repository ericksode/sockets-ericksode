const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.sockets();

        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
    };

    routes(){
        //this.app.use(this.paths.index, require('../routes/index'));
    };

    sockets(){
        this.io.on('connection', socketController);
    };

    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor en el puerto', this.port);
        });
    };

};

module.exports = Server;
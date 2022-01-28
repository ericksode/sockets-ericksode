const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-msj', (payload, callbackClient) => {
        //console.log('envento enviar-msj escuchado por el servidor', payload);
        //this.io.emit('enviar-msj-server', payload); //cuando esta en el modelo del server
        //socket.emit('enviar-msj-server', payload); //se envia msj al mismo cliente
        const id = 123456;
        callbackClient(id);
        socket.broadcast.emit('enviar-msj-server', payload);//para mandar a todos los clientes conectados
    });
}

module.exports = {
    socketController
};
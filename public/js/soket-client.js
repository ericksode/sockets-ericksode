//referencias a variables del HTML
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMsj = document.querySelector('#txtMsj');
const btnEnviar = document.querySelector('#btnEnviar');

const socketCliente = io();

//events connect disconnect de io soketCliente.on('connect',()=>{}):
socketCliente.on('connect', () => {
    lbOnline.style.display = ''
    lbOffline.style.display = 'none'
});

socketCliente.on('disconnect', () => {
    lbOnline.style.display = 'none'
    lbOffline.style.display = ''
});

socketCliente.on('enviar-msj-server', (payload) => {
    //alert(payload.mensaje);
    console.log({payload});
});

btnEnviar.addEventListener('click', () => {
    const payload = {
        mensaje: txtMsj.value,
        id: '123ABC',
        fecha: new Date().getTime()
    };
    socketCliente.emit('enviar-msj', payload, (id) => {
        console.log('Desde el server', id);
    });
});

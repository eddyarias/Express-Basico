const {io}= require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //usuario desconectado.
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callbak) => {
        //console.log('Mensaje recibido: ', data);
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);
        // if(data.usuario){
        //     callbak({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // }else{
        //     callbak({
        //         resp: 'TODO SALIO MAL'    
        //     });
        // }
    });
});

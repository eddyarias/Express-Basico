var socket = io();
        //on es para escuchar
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });
        socket.on('disconnect',function(){
            console.log('Perdimos la conexion con el servidor')
        });
        //enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Eddy',
            mensaje: 'Hola mundo'
        }, function(resp){
            console.log('respuesta server: ',resp);
        });

        //escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Desde servidor:'+mensaje.usuario + ':'+ mensaje.mensaje);
        });
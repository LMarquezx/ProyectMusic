
const mongoose = require('mongoose');
const app  =require('./app');
const port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_mean2')
    .then(()=>{
        console.log('Conexion establecida');
        app.listen(port,function(){
            console.log('servidor del apli rest escuchando en el puerto: '+port);
        });
    }).catch((err)=>{
        console.log('Error al conectar con la base de datos', err);
    });


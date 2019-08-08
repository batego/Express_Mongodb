var express = require("express");//importamos express
var app = express();
var router_app = require('./routes'); //archivo de rutas

app.use('/app',router_app);// accedemos a la aplicacion: localhost:4001/app/[rutas] 
app.listen(4001);// Escuchamos las Peticiones en el uerto definido..
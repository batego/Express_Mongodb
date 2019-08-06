var express = require("express");
var app = express();
const mongoose = require('mongoose');// incluimos la libreria de Mongoose
var Schema = mongoose.Schema; // instanciamos var ara crear el esquema

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/fotos', {
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.')
  } else {
    console.log('Error in DB connection: ' + err)
  }
});

var userSchemaJSON = {
  email: String,
  password: String
}; // Definimos el Esquema

var user_schema = new Schema(userSchemaJSON);// creamos el esquema
var User = mongoose.model("User", user_schema);// creamos el modelo a artir del esquema


app.get('/', function (req, res) {
  var user = new User({ email: 'Dereck@gmail.com', password: 'Derec1234' }); // creamos un nuevo usuario
  user.save(function () {
    res.send('Usuario creado...!');
  });// Guardamos el usuario.
});// Definimos la ruta localhost:4001/

app.get('/login', function (req, res) {
  User.find(function(err, doc){
    console.log(doc);
    res.send('Revisa tu consola Email:' + JSON.stringify(doc[0].email));
  });  
});// Definimos la ruta localhost:4001/login   ara tarer todos los usuarios


app.listen(4001);// Escuchamos las Peticiones en el uerto definido..
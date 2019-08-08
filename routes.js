var express = require("express");
var User = require('./Model/User').User;
var router = express.Router();


router.get('/', function (req, res) {
  var user = new User({ name: 'Boris', username: 'Derec', password: 'Derec1234', age: 32, email: 'Dereck@gmail.com', }); // creamos un nuevo usuario
  user.save(function () {
    res.send('Usuario creado...!');
  });// Guardamos el usuario.
});// Definimos la ruta localhost:4001/

router.get('/login', function (req, res) {
  User.find(function (err, doc) {
    console.log(doc);
    // res.send('Revisa tu consola Email:' + JSON.stringify(doc[0].email));
    res.send('Revisa tu consola Email:' + JSON.stringify(doc));
  });
});// Definimos la ruta localhost:4001/app/login   para tarer todos los usuarios


module.exports = router;
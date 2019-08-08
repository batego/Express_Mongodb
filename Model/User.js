const mongoose = require('mongoose');// incluimos la libreria de Mongoose
var Schema = mongoose.Schema; // instanciamos var ara crear el esquema


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
  name: String,
  username:String,
  password: String,
  age: Number,
  email: String,
}; // Definimos el Esquema

var user_schema = new Schema(userSchemaJSON);// creamos el esquema
var User = mongoose.model("Users", user_schema);// creamos el modelo a artir del esquema

module.exports.User = User;
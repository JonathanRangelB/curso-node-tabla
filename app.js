require("colors");
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.green))
  .catch((error) => console.log(error));

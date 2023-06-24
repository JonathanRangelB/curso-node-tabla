const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      default: 1,
      describe: "El numero de la tabla a crear",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "visualiza la tabla en consola",
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Cantidad de elementos en la tabla",
    },
  })
  .check((argb) => {
    if (isNaN(argb.b))
      throw new Error("El argumento -b, --base debe ser un numero");
    return true;
  }).argv;

module.exports = argv;

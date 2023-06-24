require("colors");
const fs = require("fs");
const path = require("path");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  let salida = "";

  for (let i = 1; i <= hasta; i++) {
    salida += `${base} X ${i} = ${base * i}\n`;
  }

  if (listar) console.log(salida.blue);

  fs.mkdirSync("./salida", { recursive: true });
  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

  return `tabla-${base}.txt creada`;
};

module.exports = {
  crearArchivo,
};

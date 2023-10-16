const fs = require("fs/promises");
const { pathMasivo } = require("../utils/utils");

const agregar = async (info) => {
  try {
    const response = await fs.readFile(pathMasivo());
    const data = JSON.parse(response);

    return data;
  } catch (error) {
    throw new Error("No se pudo leer o escribir el archivo 'alumnos.json'");
  }
};

module.exports = { agregar };

const fs = require("fs/promises");

const agregarID = (data) => {
  return data.map((e, i) => (e = { ...e, id: i }));
};

const quitarID = (data) => {
  return data.forEach(
    (e) =>
      (e = {
        nombre: e.nombre,
        apellido: e.apellido,
        localizacion: {
          pais: e.localizacion.pais,
          estado: e.localizacion.estado,
          ciudad: e.localizacion.ciudad,
        },
        contacto: e.contacto,
        mensaje: e.mensaje,
      })
  );
};

const pathMasivo = () => {
  let path = __dirname;
  //.split("\\");
  //path.pop();
  //return path.join("\\") + "\\data.json";
  return path + "\\data.json";
};
const pathMasivoUsers = () => {
  let path = __dirname;
  return path + "\\users.json";
};
const pathMasivoClients = () => {
  let path = __dirname;
  return path + "\\clientsRevisado.json";
};

const pathMasivoHistories = () => {
  let path = __dirname;
  return path + "\\histories.json";
};

const filtrar = (user) => {
  return {
    nombre: user.nombre,
    apellido: user.apellido,
    contacto: user.contacto,
    mensaje: user.mensaje,
  };
};

const fillDB = async () => {
  const response = await fs.readFile(pathMasivo());
  let data = JSON.parse(response);
  data = data.map((e) => filtrarInfoAlumno(e));

  await Alumno.bulkCreate(data);
};

module.exports = {
  agregarID,
  quitarID,
  pathMasivo,
  pathMasivoUsers,
  pathMasivoClients,
  pathMasivoHistories,
  fillDB,
};

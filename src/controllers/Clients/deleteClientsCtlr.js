const { Client } = require("../../db.js");

const deleteClient = async (id) => {
  const existingClient = await Client.findByPk(id);

  if (!existingClient || Object.keys(existingClient).length === 0) {
    throw new Error("No existe ningún cliente con ese ID");
  }

  try {
    await Client.destroy({ where: { id } });
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar al cliente.");
  }
};

module.exports = deleteClient;

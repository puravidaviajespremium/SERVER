let { User } = require("../../db.js");

let deleteUser = async (id) => {
  let existingUser = await User.findByPk(id);

  if (!existingUser || Object.keys(existingUser).length === 0) {
    throw new Error("No existe ningún usuario con ese ID");
  }

  try {
    await User.destroy({ where: { id } });
    return true;
  } catch (error) {
    throw new Error("No se pudo eliminar al cliente.");
  }
};

module.exports = deleteUser;

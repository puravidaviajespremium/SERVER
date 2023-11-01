let { User } = require("../../db.js");

let deleteManyUsers = async (filter) => {

  try {
    let deletedCount = await User.destroy({
      where: {
        id: filter.id,
      },
    });
    return deletedCount;
  } catch (error) {
    throw new Error("La consulta no es válida o no contiene una lista de IDs.");
  }
};

module.exports = deleteManyUsers;

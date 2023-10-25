let { User } = require("../../db.js");

let updateUser = async (id, user) => {
  const {
    name,
    lastName,
    email,
    telephone,
    isBlocked,
    userStatus,
  } = user;

  let existingUser = await User.findByPk(id);

  if (!existingUser || Object.keys(existingUser).length === 0) {
    throw new Error("No existe ningún user con ese ID para poder editarlo.");
  } else {
    userEdite = await User.update(
      {
        name,
        lastName,
        email,
        telephone,
        isBlocked,
        userStatus,
      },
      { where: { id } }
    );
    return true;
  }
};

module.exports = updateUser;

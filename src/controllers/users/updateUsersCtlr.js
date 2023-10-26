let { User } = require("../../db.js");

let updateUsersCtlr = async (id, user) => {
  const { firstName, lastName, email, telephone, isBlocked, userStatus } = user;
  console.log(user);
  let existingUser = await User.findByPk(id);

  if (!existingUser || Object.keys(existingUser).length === 0) {
    throw new Error("No existe ningún user con ese ID para poder editarlo.");
  } else {
    userEdite = await User.update(
      {
        firstName,
        lastName,
        email,
        telephone,
        isBlocked,
        userStatus,
      },
      { where: { id } }
    );
    return userEdite;
  }
};

module.exports = updateUsersCtlr;

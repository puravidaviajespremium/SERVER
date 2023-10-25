let { User } = require("../../db");

const createUser = async (
  name,
  lastName,
  email,
  telephone,
  isBlocked,
  userStatus
) => {
  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    throw new Error("El usuario ya existe!!");
  }

  const newUser = await User.create({
    name,
    lastName,
    email,
    telephone,
    isBlocked,
    userStatus
  });

  return newUser;
};

module.exports = createUser;

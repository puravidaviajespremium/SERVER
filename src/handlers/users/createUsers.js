let createUser = require("../../controllers/users/createUsersCtlr");

let createUsers = async (req, res) => {
  let { firstName, lastName, email, telephone, isBlocked, userStatus } =
    req.body;
  try {
    if ((!firstName, !lastName, !email, !telephone, !isBlocked, !userStatus)) {
      throw new Error("Faltan Datos!!");
    }

    const newUser = await createUser(
      firstName,
      lastName,
      email,
      telephone,
      isBlocked,
      userStatus
    );

    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = createUsers;

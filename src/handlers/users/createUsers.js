let createUser = require("../../controllers/users/createUsersCtlr")

let createUsersHandler = async (req, res) => {

  try {
    let {
      name,
      lastName,
      email,
      telephone,
      isBlocked,
      userStatus } = req.body;

    if (!name, !lastName, !email, !telephone, !isBlocked, !userStatus) { throw new Error("Faltan Datos!!") };

    newUser = await createUser(
      name,
      lastName,
      email,
      telephone,
      isBlocked,
      userStatus);

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createUsersHandler;
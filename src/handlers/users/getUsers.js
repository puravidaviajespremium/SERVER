let getAllUsers = require("../../controllers/users/getAllUsersCtlr");
let getUsersByName = require("../../controllers/users/getUsersByNameCtlr")

let getUsersHandler = async (req, res) => {

  const { firstName, lastName } = req.query;

  try {

    if (firstName || lastName) {
      let userByName = await getUsersByName(firstName, lastName);
      res.status(200).json(userByName)

    } else {
      let allUsers = await getAllUsers();
      res.status(200).json(allUsers);
    };

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = getUsersHandler;
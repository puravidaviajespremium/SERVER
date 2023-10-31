let getAllUsers = require("../../controllers/users/getAllUsersCtlr");
let getUsersByName = require("../../controllers/users/getUsersByNameCtlr")

let getUsersHandler = async (req, res) => {

  const { firstName, lastName, page, perPage } = req.query;

  const pageNumber = parseInt(page) ;
  const rowsPerPage = parseInt(perPage);

  const offset = (pageNumber - 1) * rowsPerPage;

  try {

    if (firstName || lastName) {
      let userByName = await getUsersByName(firstName, lastName, offset, rowsPerPage);
      res.status(200).json(userByName)

    } else {
      let allUsers = await getAllUsers(offset, rowsPerPage);
      res.status(200).json(allUsers);
    };

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = getUsersHandler;

const deleteUser = require("../../controllers/users/deleteUsersCtlr");

const deleteUserHandler = async (req, res) => {

  let { id } = req.params;

  try {
    if (id) {

      let deleteU = await deleteUser(id);

      res.status(200).json(deleteU);
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = deleteUserHandler;
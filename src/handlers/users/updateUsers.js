
const updateUser = require("../../controllers/users/updateUsersCtlr");

const updateUserHandler = async (req, res) => {

  const info = req.body;
  let { id } = req.params

  try {
    if (
      info.name &&
      info.lastName &&   //Necesita cambiar obligatoriamente todas ? o si o si solo nombre??
      info.email &&
      info.telephone &&
      info.isBlocked &&
      info.userStatus) {
      const updateU = await updateUser(id, info);
      res.status(200).send(updateU);
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUserHandler;
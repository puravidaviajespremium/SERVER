const updateUsersCtlr = require("../../controllers/users/updateUsersCtlr");

const updateUser = async (req, res) => {
  const info = req.body;
  let { id } = req.params;

  try {
    if (
      info.firstName &&
      info.lastName && //Necesita cambiar obligatoriamente todas ? o si o si solo nombre??
      info.email &&
      info.telephone &&
      (info.isBlocked === true || info.isBlocked === false) &&
      info.userStatus
    ) {
      const updateU = await updateUsersCtlr(id, info);

      if (updateU)
        res.status(200).json({ data: { id, ...info } });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateUser;

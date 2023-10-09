const updateUsersCtlr = require("../../controllers/users/updateUsersCtlr");

module.exports = (req, res) => {
  const id = 19;
  const newData = "Nuevos Datos";
  const response = updateUsersCtlr(id, newData);
  res.send(response);
};

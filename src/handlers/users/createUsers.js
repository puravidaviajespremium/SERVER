const createUsersCtlr = require("../../controllers/users/createUsersCtlr");

module.exports = (req, res) => {
  const newUser = "Nuevo Usuario";
  const response = createUsersCtlr(newUser);
  res.send(response);
};

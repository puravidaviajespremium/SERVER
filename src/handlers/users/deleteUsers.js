const deleteUsersCtlr = require("../../controllers/users/deleteUsersCtlr");

module.exports = (req, res) => {
  const id = 35;
  const actions = "Bannear";
  const response = deleteUsersCtlr(id, actions);
  res.send(response);
};

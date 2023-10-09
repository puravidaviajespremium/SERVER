const getUsersCtlr = require("../../controllers/users/getUsersCtlr");

module.exports = (req, res) => {
  const response = getUsersCtlr();
  res.send(response);
};

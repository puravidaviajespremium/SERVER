const createCountriesCtlr = require("../../controllers/Countries/createCountriesCtlr");

module.exports = (req, res) => {
  const newUser = "Nuevo Usuario";
  const response = createUsersCtlr(newUser);
  res.send(response);
};

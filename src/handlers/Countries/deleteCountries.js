const deleteCountriesCtlr = require("../../controllers/Countries/deleteCountriesCtlr");

module.exports = (req, res) => {
  const id = 40;
  const actions = "Eliminar";
  const response = deleteCountriesCtlr(id, actions);
  res.send(response);
};

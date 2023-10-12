const updateCountriesCtlr = require("../../controllers/Countries/updateCountriesCtlr");

module.exports = (req, res) => {
  const id = 25;
  const newData = "Nuevos Datos de Countries";
  const response = updateCountriesCtlr(id, newData);
  res.send(response);
};

const getCountriesCtlr = require("../../controllers/Countries/getCountriesCtlr");

module.exports = (req, res) => {
  const response = getCountriesCtlr();
  res.send(response);
};

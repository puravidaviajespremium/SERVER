const {allCountries} = require("../../controllers/Countries/getCountriesCtlr")

const getCountries = async (req, res) =>{
  try{
    const countries = await allCountries();
    res.status(200).json(countries)

  } catch (error) {
      res.status(400).json({error: error.message});
  }
};


module.exports = getCountries 
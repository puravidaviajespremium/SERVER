const { json } = require("body-parser");
const deleteCountriesCtlr = require("../../controllers/Countries/deleteCountriesCtlr");
const deleteC = require("../../controllers/Countries/deleteCountriesCtlr")


const deleteCountryHandler = async (req, res) => {
  const {id} = req.params;

  try {
    if(id){
      const deleteCountry = await deleteC(id);
      res.status(200).json(deleteCountry)
    }

  } catch (error) {
    res.status(400).json({error: error.message})


  }



}

module.exports = deleteCountryHandler
const updateCountriesCtlr = require("../../controllers/Countries/updateCountriesCtlr");
const updateCountries = require("../../controllers/Countries/updateCountriesCtlr")


const updateCountriesHandler = async (req, res) => {
  const info = req.body
  const {id} = req.params

  try{
    if(info.name && info.continent && info.image && info.experiences){
      const update = await updateCountries(id , info);
      res.status(200).send(update)

    }
  } catch (error){
    res.status(400).json({error: error.message});
  }
}

module.exports = updateCountriesHandler
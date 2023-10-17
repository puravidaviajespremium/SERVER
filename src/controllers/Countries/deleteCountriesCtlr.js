const {Country} = require("../../db.js");

const deleteC = async(id) => {
  const existingCountry = await Country.findByPk(id);

  if(!existingCountry || Object.keys(existingCountry).length ===0) {
    throw new Error("No existe pais con ese ID ")
  }

  try{
    await Country.destroy({where : {id}})
    return true

  } catch (error) {
    throw new Error("No se puede elinar al cliente ")

  }
}

module.exports = deleteC
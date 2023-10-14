const {Country} = require("../../db")

const createCountries = async(name, image, description, experiences, continents ) => {

  const existingCountry = await Country.findOne({
    where : {
      name,
    }
  })
  if(existingCountry){
    throw new Error("Ya existe el pais que deseas crear")
  }

  if(!name || !description ||!image ||!experiences ||!continents) {
    throw Error ("Faltan datos")
  } else{
      const newCountry = await Country.create({name, image, description, experiences, continents})

    return newCountry
  }
}


module.exports = {createCountries}


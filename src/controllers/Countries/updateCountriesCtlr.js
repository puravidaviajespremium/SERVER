const { Country, Destiny } = require("../../db.js")
const { Op } = require("sequelize");

const updateCountries = async (id, countries, info) => {
  const { name, image, description, experiences, continent } = countries


  const existingCountry = await Country.findByPk(id);

  if (!existingCountry || Object.keys(existingCountry).length === 0) {
    throw new Error("No existe ningún pais con ese ID para poder editarlo.");
  } else {
    countryEdit = await Country.update({
      name,
      image,
      description,
      experiences,
      continent,
    },
      { where: { id } },
  
    );



    const mapinfo =  info.map  ( async (d)  =>  {
      await Destiny.update({
        name: d.name,
        image: d.image,
        description: d.description
    
      },
        {where: {id:d.id}}
      )
      
    });

    

    return {...countryEdit, destinies: mapinfo}

  }
}

module.exports = updateCountries
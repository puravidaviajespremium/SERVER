const { Country, Destiny } = require("../../db.js");

const createCountries = async (
  name,
  image,
  description,
  experiences,
  continent,
  destinies
) => {
  const existingCountry = await Country.findOne({
    where: {
      name,
    },
  });
  if (existingCountry) {
    throw new Error("Ya existe el pais que deseas crear");
  }

  if (!name || !description || !image || !experiences || !continent) {
    throw Error("Faltan datos");
  } else {
    const newCountry = await Country.create({
      name,
      image,
      description,
      experiences,
      continent,
    });
    destinies
      ? destinies.forEach(async (d) => {
          const newDestiny = await Destiny.create(d);
          await newCountry.addDestiny(newDestiny);
        })
      : console.log("No hay destinos populares");
    return newCountry;
  }
};

module.exports = { createCountries };

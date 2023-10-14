const { Country } = require("../../db.js");

const createCountries = async (
  name,
  image,
  description,
  experiences,
  continent
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

    return newCountry;
  }
};

module.exports = { createCountries };

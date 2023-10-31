const { Country } = require("../../db.js");
const { Op } = require("sequelize");

const getCountriesByNamectlr = async (country, offset, rowsPerPage) => {
  const countriesByName = await Country.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${country}%`,
      },
    },
    offset: offset,
    limit: rowsPerPage
  });

  if (!countriesByName || Object.keys(countriesByName).length === 0) {
    throw new Error("No existe el destino buscado.");
  }

  const hasPreviousPage = offset > 0;
  const hasNextPage = countriesByName.rows.length === rowsPerPage;

  return {
    countries: countriesByName.rows,
    total: countriesByName.count,
    pageInfo:{
      hasPreviousPage: hasPreviousPage,
      hasNextPage: hasNextPage
    }
  };
};

module.exports = getCountriesByNamectlr;

const { Country } = require("../../db.js");

const allCountries = async (offset, rowsPerPage) => {
  if(!offset && !rowsPerPage){
    const countries = await Country.findAll()

    if (countries.length === 0) {
      throw new Error("No se registró ningún país");
    }
    
    const response = countries.map((c) => {
      return {
        id: c.id,
        name: c.name,
        image: c.image,
        description: c.description,
        experiences: c.experiences,
        continent: c.continent
      };
    });

    return response
  } else {

    const countries = await Country.findAndCountAll({
      offset: offset,
      limit: rowsPerPage
    });
  
    if (countries.rows.length === 0) {
      throw new Error("No se registró ningún país");
    }
  
    const response = countries.rows.map((c) => {
      return {
        id: c.id,
        name: c.name,
        image: c.image,
        description: c.description,
        experiences: c.experiences,
        continent: c.continent
      };
    });
  
    const hasPreviousPage = offset > 0;
    const hasNextPage = offset + rowsPerPage < countries.count;
  
    return {
      countries: response,
      total: countries.count,
      pageInfo: {
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage
      }
    };
  }

};

module.exports = { allCountries };

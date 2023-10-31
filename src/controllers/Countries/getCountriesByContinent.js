let { Country } = require("../../db")

let getCountriesByContinent = async (continent, offset, rowsPerPage) => {

    let countries = await Country.findAndCountAll({
        where: { continent },
        offset: offset,
        limit: rowsPerPage
    })

    if (!countries || Object.keys(countries).length === 0) {
        throw new Error("No existe ningun Paíz por este continente!");
    }

    const hasPreviousPage = offset > 0;
    const hasNextPage = countries.rows.length === rowsPerPage;

    return {
        countries: countries.rows,
        total: countries.count,
        pageInfo: {
            hasPreviousPage: hasPreviousPage,
            hasNextPage: hasNextPage
        }
    };

};

module.exports = getCountriesByContinent;
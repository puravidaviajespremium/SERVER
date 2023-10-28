let { Country } = require("../../db")

let getCountriesByContinent = async (continent) => {

    let countries = await Country.findAll({
        where: { continent }
    })

    if (!countries || Object.keys(countries).length === 0) {
        throw new Error("No existe ningun Paíz por este continente!");
    }

    return countries;

};

module.exports = getCountriesByContinent;
let getCountriesByContinent = require("../../controllers/Countries/getCountriesByContinent");

let getCountriesByContinentHandler = async (req, res) => {
    let { continent, page, perPage } = req.query;

    const pageNumber = parseInt(page);
    const rowsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * rowsPerPage

    try {
        let response = await getCountriesByContinent(continent, offset, rowsPerPage);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getCountriesByContinentHandler;
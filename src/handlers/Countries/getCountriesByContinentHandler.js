let getCountriesByContinent = require("../../controllers/Countries/getCountriesByContinent");

let getCountriesByContinentHandler = async (req, res) => {
    let { continent } = req.params;

    try {
        let response = await getCountriesByContinent(continent);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getCountriesByContinentHandler;
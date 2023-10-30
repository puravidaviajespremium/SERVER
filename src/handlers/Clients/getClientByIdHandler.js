let getClientById = require("../../controllers/Clients/getClientById");

let getClientByIdHandler = async (req, res) => {

    let { id } = req.params;

    try {
        let response = await getClientById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getClientByIdHandler;
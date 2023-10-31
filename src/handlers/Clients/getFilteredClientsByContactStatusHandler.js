let getFilteredClientsByContactStatus = require("../../controllers/Clients/getFilteredClientsByContactStatus");

let getFilteredClientsByContactStatusHandler = async (req, res) => {
    let { contactStatus } = req.params;

    try {
        let Clientes = await getFilteredClientsByContactStatus(contactStatus);
        res.status(200).json(Clientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getFilteredClientsByContactStatusHandler;
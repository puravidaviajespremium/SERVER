let getFilteredClientsByContactStatus = require("../../controllers/Clients/getFilteredClientsByContactStatus");

let getFilteredClientsByContactStatusHandler = async (req, res) => {
    let { contactStatus, page, perPage } = req.query;

    const pageNumber = parseInt(page);
    const rowsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * rowsPerPage;

    try {
        let Clientes = await getFilteredClientsByContactStatus(contactStatus, offset, rowsPerPage);
        res.status(200).json(Clientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getFilteredClientsByContactStatusHandler;
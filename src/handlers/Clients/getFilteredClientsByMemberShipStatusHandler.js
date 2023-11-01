let getFilteredClientsByMemberShipStatus = require("../../controllers/Clients/getFilteredClientsByMemberShipStatus");

let getFilteredClientsByMemberShipStatusHandler = async (req, res) => {
    let { membershipStatus, page, perPage } = req.query;

    const pageNumber = parseInt(page);
    const rowsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * rowsPerPage;

    try {
        let response = await getFilteredClientsByMemberShipStatus(membershipStatus, offset, rowsPerPage);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getFilteredClientsByMemberShipStatusHandler;
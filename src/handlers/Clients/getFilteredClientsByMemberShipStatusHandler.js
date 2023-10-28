let getFilteredClientsByMemberShipStatus = require("../../controllers/Clients/getFilteredClientsByMemberShipStatus");

let getFilteredClientsByMemberShipStatusHandler = async (req, res) => {
    let { membershipStatus } = req.params;

    try {
        let response = await getFilteredClientsByMemberShipStatus(membershipStatus);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getFilteredClientsByMemberShipStatusHandler;

const deleteClient = require("../../controllers/Clients/deleteClientsCtlr.js");

const deleteClientHandler = async (req, res) => {

    let { id } = req.params;

    try {
        if (id) {

            const deleteC = await deleteClient(id);

            res.status(200).json(deleteC);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = deleteClientHandler;
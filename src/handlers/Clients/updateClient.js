
const updateClient = require("../../controllers/Clients/updateClientCtlr.js");

const updateClientHandler = async (req, res) => {

    const info = req.body;
    const { email } = req.query;

    try {
        if (info.email) {
            const updateC = await updateClient(email, info);
            if (updateC) {
                res.status(200).json({ data: { email, ...info } }); //editado para el admin
            }

        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = updateClientHandler;
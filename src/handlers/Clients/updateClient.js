
const updateClient = require("../../controllers/Clients/updateClientCtlr.js");

const updateClientHandler = async (req, res) => {

    const info = req.body;
    const { email } = req.query;

    try {
        if( info.email ){
            const updateC = await updateClient(email, info);
                res.status(200).send(updateC);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = updateClientHandler;
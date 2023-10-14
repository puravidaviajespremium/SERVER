
const updateClient = require("../../controllers/Clients/updateClientCtlr.js");

const updateClientHandler = async (req, res) => {

    const info = req.body;
    const {id} = req.query;

    try {
        if(
            info.firstName && 
            info.lastName &&   //Necesita cambiar obligatoriamente todas ? o si o si solo nombre??
            info.email && 
            info.telephone){
            const updateC = await updateClient(id, info);
                res.status(200).send(updateC);
        }

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = updateClientHandler;
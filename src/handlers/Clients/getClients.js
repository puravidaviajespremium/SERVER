
const getAllClients = require("../../controllers/Clients/getAllClientsCtlr.js");
const getClientsByName = require("../../controllers/Clients/getClientsByNameCtlr.js")

const getClientsHandler = async (req, res) => {

    const {firstName, lastName} = req.query;

    try {

        if(firstName || lastName){
            const clientByName = await getClientsByName(firstName, lastName);
            res.status(200).json(clientByName)
            
        } else {      
            const allClients = await getAllClients();
            res.status(200).json(allClients);
        };

    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getClientsHandler;
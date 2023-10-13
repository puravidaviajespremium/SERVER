const createClient = require("../../controllers/Clients/createClientsCtlr.js")

const createClientsHandler = async (req, res) => {
    
    try {
        const {firstName, lastName, email, telephone, comment} = req.body;

        if(!firstName, !lastName, !email, !telephone){throw new Error("Faltan Datos!!")};
        
        newClient = await createClient(firstName, lastName, email, telephone, comment);

        res.status(201).send(newClient);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = createClientsHandler;
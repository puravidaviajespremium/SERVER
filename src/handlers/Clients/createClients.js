const createClient = require("../../controllers/Clients/createClientsCtlr.js")

const createClientsHandler = async (req, res) => {
    
    try {
        const { email } = req.body;

        if( !email ){throw new Error("Faltan Datos!!")};
        
        newClient = await createClient( email );

        res.status(201).send(newClient);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = createClientsHandler;
const createClient = require("../../controllers/Clients/createClientsCtlr.js")

const createClientsHandler = async (req, res) => {
    
    try {
        const {
            firstName, 
            lastName,
            email, 
            telephone, 
            countryOrigin, 
            destinationCountry} = req.body;

        if(!firstName, !lastName, !email, !telephone, !countryOrigin){throw new Error("Faltan Datos!!")};
        
        newClient = await createClient(
            firstName, 
            lastName, 
            email,
            telephone, 
            countryOrigin, 
            destinationCountry);

        res.status(201).send(newClient);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = createClientsHandler;
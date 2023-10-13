
const {Client} = require("../../db.js");

const createClient = async (firstName, lastName, email, telephone, comment) => {

    const existingClient = await Client.findOne({
        where: {firstName, lastName}
    });

    if(existingClient) {throw new Error("El usuario ya existe!!")};

    const newClient = await Client.create({
        firstName, lastName, email, telephone, comment
    });

    return newClient;
};

module.exports = createClient;
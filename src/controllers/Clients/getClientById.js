let { Client } = require("../../db");
let { HistoryClient } = require("../../db");

let getClientById = async (id) => {

    let clientById = await Client.findOne({
        where: { id },
        include: [{
            model: HistoryClient,
            attributes: ["id", "date", "comment", "destinationCountry", "originMsg", "payment", "paymentConcept"]
        }]
    });

    if (!clientById) {
        throw new Error("Cliente no encontrado");
    }

    return clientById;

};

module.exports = getClientById;



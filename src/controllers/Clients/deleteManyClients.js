let { Client } = require('../../db');

let deleteManyClients = async (filter) => {
    let deletedCount = await Client.destroy({
        where: { id: filter.id }
    })

    if (!deletedCount || Object.keys(deletedCount).length === 0) {
        throw new Error("La consulta no es válida o no contiene una lista de IDs.");
    }

    return deletedCount;
}

module.exports = deleteManyClients;
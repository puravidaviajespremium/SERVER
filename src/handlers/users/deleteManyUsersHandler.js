let deleteManyUsers = require("../../controllers/users/deleteManyUsers")

let deleteManyUserHandler = async (req, res) => {
    let filter = JSON.parse(req.query.filter);

    try {

        if (filter && Array.isArray(filter.id) && filter.id.length > 0) {
            let response = await deleteManyUsers(filter)
            res.status(200).json({ message: `${response} usuarios eliminados` })
        } else {
            res.status(400).json({ error: "La consulta no es válida o no contiene una lista de IDs." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteManyUserHandler;
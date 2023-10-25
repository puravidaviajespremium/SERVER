let getUsersByIdCtlr = require("../../controllers/users/getUserByIdCtlr");

let getCUsersById = async (req, res) => {
    let { id } = req.params;
    try {
        let user = await getUsersByIdCtlr(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getCUsersById;
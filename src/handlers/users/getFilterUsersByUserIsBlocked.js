let filterUsersByUserIsBlocked = require("../../controllers/users/filterUsersByIsBlocked");

let getUsersByIsBlocked = async (req, res) => {
    let { isBlocked } = req.params;
    try {
        let user = await filterUsersByUserIsBlocked(isBlocked);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getUsersByIsBlocked;
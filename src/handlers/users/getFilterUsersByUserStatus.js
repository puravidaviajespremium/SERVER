let filterUsersByUserStatus = require("../../controllers/users/filterUsersByUserStatus");

let getUsersBystatus = async (req, res) => {
    let { userStatus } = req.params;
    try {
        let user = await filterUsersByUserStatus(userStatus);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getUsersBystatus;
const { off } = require("process");
let filterUsersByUserStatus = require("../../controllers/users/filterUsersByUserStatus");

let getUsersBystatus = async (req, res) => {
    let { userStatus, page, perPage } = req.query;

    const pageNumber = parseInt(page);
    const rowsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * rowsPerPage;

    try {
        let user = await filterUsersByUserStatus(userStatus, offset, rowsPerPage);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getUsersBystatus;
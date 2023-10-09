const getUsers = require("../handlers/users/getUsers");
const createUsers = require("../handlers/users/createUsers");
const updateUsers = require("../handlers/users/updateUsers");
const deleteUsers = require("../handlers/users/deleteUsers");
const { router } = require("../server");

router.get("/users", getUsers);

router.get("/create", createUsers);

router.get("/update", updateUsers);

router.get("/delete", deleteUsers);

module.exports = router;

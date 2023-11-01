let { User } = require('../../db.js')

let getAllUsersByIsBlocked = async (isBlocked) => {
    let allUsersByIsBlocked = await User.findAll({
        where: { isBlocked: isBlocked === "true" },
    }
    );

    if (allUsersByIsBlocked.length === 0) throw new Error("No hay ningún usuario con el Status seleccionado!");

    return allUsersByIsBlocked;
}

module.exports = getAllUsersByIsBlocked;
let { User } = require('../../db.js')

let getAllUsersByStatus = async (userStatus) => {
    let allUsersByStatus = await User.findAll({
        where: { userStatus: userStatus },
    }
    );

    if (allUsersByStatus.length === 0) throw new Error("No hay ningún usuario con el ROL seleccionado!");

    return allUsersByStatus;
}

module.exports = getAllUsersByStatus;
const { User, Config } = require("../db.js");
let UserId;

module.exports = async () => {
  try {
    const results = await User.findAll({
      where: {
        isBlocked: false,
        userStatus: "Colaborador",
      },
      order: ["id"],
      attributes: ["id", "firstName", "lastName"],
    });

    const users = results.map((u) => u.dataValues);

    UserId = await Config.findByPk(1);

    let userconfig;

    if (!UserId) {
      UserId = users[0].id;

      userconfig = await Config.create({ UserId });
    } else {
      UserId = UserId.dataValues.UserId;

      const usersId = users.map((u) => u.id);

      if (usersId.indexOf(UserId) === users.length - 1) UserId = users[0].id;
      else UserId = users[usersId.indexOf(UserId) + 1].id;

      userconfig = await Config.update(
        {
          UserId,
        },
        { where: { id: 1 } }
      );
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

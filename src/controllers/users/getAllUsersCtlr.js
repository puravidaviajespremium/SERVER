let { User } = require('../../db.js')

let getAllUsers = async () => {
  let allUsers = await User.findAll();

  if (allUsers.length === 0) throw new Error("No hay ningún usuario en la base de datos!");

  return allUsers;
}

module.exports = getAllUsers;

const {Client} = require("../../db");
const {Op} = require("sequelize");

const getClientsByName = async (firstName, lastName) => {

    const clientsByName = await Client.findAll({
        where: {
            [Op.or]: 
                [{firstName:{[Op.iLike]: `%${firstName}%`}}, //revisar tema de acentuación npm i diacritics
                {lastName:{[Op.iLike]: `%${lastName}%`}}]

                // [{firstName: {[Op.regexp]: `%${firstName}%`,[Op.options]: "i",}},
                // {lastName: {[Op.regexp]: `%${lastName}%`,[Op.options]: "i"}}]  //MARIA DB
        }
    })

    if(!clientsByName || Object.keys(clientsByName).length === 0){
        throw new Error("No existe ningun cliente con ese nombre o apellido")}

    return clientsByName; 
};

module.exports = getClientsByName;
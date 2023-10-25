const { Client } = require("../../db.js");

const createClient = async ( email ) => {

  try {
    const existingClient = await Client.findOne({
      where: { email },
    });
  
    if (existingClient) {
      return { error: "El usuario ya existe" };
    }
  
    const newClient = await Client.create({ email });
  
    return newClient;
    
  } catch (error) {
    throw new Error(error.message)
  }
};

module.exports = createClient;

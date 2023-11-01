const updateClient = require("../../controllers/Clients/updateClientCtlr.js");

const updateClientHandler = async (req, res) => {
  let info = req.body;
  let { id } = req.params;

  try {
    if (
      info.firstName &&
      info.lastName &&
      info.telephone &&
      info.email &&
      info.countryOrigin &&
      info.membershipStatus &&
      info.contactStatus
    ) {
      const updateC = await updateClient(id, info);
      if (updateC) {
        res.status(200).json({ data: { id, ...info } }); //editado para el admin
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateClientHandler;

const getClientsByCollCtlr = require("../../controllers/Clients/getClientsByCollCtlr");
let getFilteredClientsByContactStatus = require("../../controllers/Clients/getFilteredClientsByContactStatus");

const getClientsByColl = async (req, res) => {
  console.log(req.query);
  let { UserId, membershipStatus, contactStatus, page, perPage } = req.query;

  console.log(UserId, membershipStatus, contactStatus, page, perPage);
  const pageNumber = parseInt(page);
  const rowsPerPage = parseInt(perPage);

  const offset = (pageNumber - 1) * rowsPerPage;

  try {
    let Clientes = await getClientsByCollCtlr(
      UserId,
      membershipStatus,
      contactStatus,
      offset,
      rowsPerPage
    );
    res.status(200).send(Clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getClientsByColl;

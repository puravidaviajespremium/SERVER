const getClientsByCollCtlr = require("../../controllers/Clients/getClientsByCollCtlr");
let getFilteredClientsByContactStatus = require("../../controllers/Clients/getFilteredClientsByContactStatus");

const getClientsByColl = async (req, res) => {
  console.log(req.query);
  let { UserId, membershipStatus, contactStatus, firstName,  page, perPage } = req.query;

  console.log(UserId, membershipStatus, contactStatus, page, perPage, firstName);
  const pageNumber = parseInt(page);
  const rowsPerPage = parseInt(perPage);

  const offset = (pageNumber - 1) * rowsPerPage;

  try {
    let Clientes = await getClientsByCollCtlr(
      UserId,
      membershipStatus,
      contactStatus,
      firstName,
      offset,
      rowsPerPage
    );
    res.status(200).send(Clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getClientsByColl;

const getMetricsCtrl = require("../../controllers/users/getMetricsCtlr");

let getMetrics = async (req, res) => {
  try {
    let allUsers = await getMetricsCtrl();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getMetrics;

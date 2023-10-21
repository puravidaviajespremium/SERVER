const axios = require("axios");
require("dotenv").config();
const { CLIENT, SECRET, PAYPAL_API, URL_PAYPAL } = process.env;

const captureOrder = async (req, res) => {
  const { token } = req.query;

  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: CLIENT,
        password: SECRET,
      },
    }
  );

  console.log(response);

  res.json(response.data);
};
module.exports = captureOrder;

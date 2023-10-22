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

  // console.log(response);
  // res.json(response.data);
  res.redirect(`http://localhost:5173/payment/success?name=${response.data.purchase_units[0].shipping.name.full_name}`)
};

module.exports = captureOrder;

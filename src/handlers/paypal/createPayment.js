const axios = require("axios");
require("dotenv").config();
const { CLIENT, SECRET, PAYPAL_API, URL_BASE } = process.env;

const createPayment = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "20",
        },
      },
    ],
    application_context: {
      brand_name: "Pura Vida Viajes Premium",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${URL_BASE}/paypal/capture-order`,
      cancel_url: `${URL_BASE}/paypal/cancel-order`,
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
    auth: {
      username: CLIENT,
      password: SECRET,
    },
  });

  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json(response.data.links);
};
module.exports = createPayment;

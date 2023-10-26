const { Router } = require("express");
const routerAuthentication = Router();
const { expressjwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
var axios = require("axios");
const createClient = require("../controllers/Clients/createClientsCtlr");

//rutas

routerAuthentication.get("/", (req, res) => {
  res.send("Todo de maravilla");
});

routerAuthentication.get("/protected", async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-mnltohiryggl7674.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userinfo = response.data;
    console.log(accessToken);
    res.status(200).send(userinfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routerAuthentication.get("/dashboard", (req, res) => {
  res.send("hola");
});

module.exports = routerAuthentication;

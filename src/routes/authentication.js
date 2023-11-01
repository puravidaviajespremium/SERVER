const { Router } = require("express");
const routerAuthentication = Router();
const { expressjwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
var axios = require("axios");
const createClient = require("../controllers/Clients/createClientsCtlr");

const { User, Client } = require("../db");

//rutas

routerAuthentication.get("/", (req, res) => {
  res.send("Todo de maravilla");
});

routerAuthentication.get("/protected", async (req, res) => {
  let userProfile;
  let name;
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

    const userAutenticated = await User.findOne({
      where: { email: response.data.email },
    });

    if (userAutenticated) {
      const { id, firstName, lastName, email, isBlocked, userStatus } =
        userAutenticated.dataValues;

      if (!isBlocked) {
        name = `${firstName} ${lastName}`;
        userProfile = {
          user: {
            id,
            name,
            email,
            role: userStatus,
            blocked: false,
            accessToken,
          },
        };
      } else {
        name = `${firstName} ${lastName}`;
        userProfile = { user: { id, name, email, blocked: true } };
      }
    } else {
      const clientsAutenticate = await Client.findOne({
        where: { email: response.data.email },
      });

      if (clientsAutenticate) {
        const { id, firstName, lastName, email } =
          clientsAutenticate.dataValues;
        name = `${firstName} ${lastName}`;
        userProfile = {
          user: {
            id,
            name,
            email,
            role: "Cliente",
            blocked: false,
          },
        };
      } else {
        userProfile = {
          user: {
            id: "",
            name: response.data.nickname,
            email: response.data.email,
            role: "No Registrado",
            blocked: false,
          },
        };
      }
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ error: error.message });
  }
});

routerAuthentication.get("/dashboard", (req, res) => {
  res.send("hola");
});

module.exports = routerAuthentication;

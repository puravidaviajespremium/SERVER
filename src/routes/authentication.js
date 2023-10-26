const { Router } = require("express");
const routerAuthentication = Router();
const { expressjwt } = require("express-jwt")
const jwksRsa = require("jwks-rsa");
var axios = require("axios");
const createClient = require('../controllers/Clients/createClientsCtlr')

<<<<<<< HEAD
//rutas

routerAuthentication.get("/", (req, res) => {
  res.send("Todo de maravilla");
});
=======

// let accessToken = null;

// const checkJwt = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-mnltohiryggl7674.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://puravidaapireact',
//   issuer:[`https://dev-mnltohiryggl7674.us.auth0.com/`],
//   algorithms: ['RS256']
// });

// //rutas   

// routerAuthentication.get('/public', function(req, res) {
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// // This route needs authentication
// routerAuthentication.get('/private', checkJwt, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });

// // const checkScopes = requiredScopes('read:messages');

// // routerAuthentication.get('/private-scoped', checkJwt, checkScopes, function(req, res) {
// //   res.json({
// //     message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
// //   });
// // });

// routerAuthentication.post('/token', async (req, res) => {
//   try {
//     const response = await axios.post("https://dev-mnltohiryggl7674.us.auth0.com/oauth/token", {
//       client_id: "kHVaJn0970aMvbQysRwTBYBI7oUzylwI",
//       client_secret: "xqg-LFlh5-hztr7cZIPmarOUco8Jislp6rybJT-PFBq-REPFCi9mzxmaEXVJWNK1",
//       audience: "https://puravidaapireact",
//       grant_type: "client_credentials"
//     });

//     accessToken = response.data.access_token; // Almacena el token en una variable global
//     res.status(200).json({accessToken});
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
>>>>>>> developer

routerAuthentication.get("/protected", async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log(accessToken)
    const response = await axios.get('https://dev-mnltohiryggl7674.us.auth0.com/userinfo', {
      headers : {
        authorization: `Bearer ${accessToken}`
      }
    })
    const userinfo = response.data;
    console.log(userinfo)
    console.log(userinfo.email)

    // CREACION EN BASE DE DATOS
    let newClient = createClient(userinfo.email)

    res.send(newClient)
    
  } catch (error) {
    res.status(401).json({error: error.message})
  }
>>>>>>> developer
});

module.exports = routerAuthentication;

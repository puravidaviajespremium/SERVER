const configAuth0 = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  baseURL: URL_BASE,
  clientID: AUTH0_CLIENT_ID,
  secret: SESSION_SECRET,
};

module.exports = configAuth0;

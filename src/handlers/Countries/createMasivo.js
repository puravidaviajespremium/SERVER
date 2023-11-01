const fs = require("fs/promises");
const {
  pathMasivo,
  pathMasivoUsers,
  pathMasivoClients,
  pathMasivoHistories,
} = require("../../utils/utils.js");
const {
  Country,
  Destiny,
  User,
  Client,
  HistoryClient,
} = require("../../db.js");
const {
  createCountries,
} = require("../../controllers/Countries/createCountriesCtlr.js");

const createCountriesMasivo = async (req, res) => {
  try {
    const responseUsers = await fs.readFile(pathMasivoUsers());
    const datausers = JSON.parse(responseUsers);

    const newUsers = await User.bulkCreate(datausers);
    console.log("Users OK");

    const response = await fs.readFile(pathMasivo());
    const data = JSON.parse(response);

    data.forEach(async (pais) => {
      const { name, image, description, experiences, continent, destinies } =
        pais;

      const newCreatepais = await createCountries(
        name,
        image,
        description,
        experiences,
        continent,
        destinies
      );
    });

    const countries = await Country.findAll();

    const responseClients = await fs.readFile(pathMasivoClients());
    const dataClients = JSON.parse(responseClients);

    const newClients = await Client.bulkCreate(dataClients);
    console.log("newClients");

    const responseHistories = await fs.readFile(pathMasivoHistories());
    const dataHistories = JSON.parse(responseHistories);

    const newHistories = await HistoryClient.bulkCreate(dataHistories);
    console.log(newHistories);

    res.status(201).json(newClients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCountriesMasivo;

// For evaluating text
const Aylien = require("aylien_textapi");
const dotenv = require("dotenv");
//Requiring the API keys and ID
dotenv.config();
// Variables for API and ID
const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;

const textApi = new Aylien({
  application_id: API_ID,
  application_key: API_KEY,
});
//Function to extract the data.
const extractDataFromAylien = (req, res) => {
  const { url } = req.body;
  textApi.sentiment(
    {
      url,
    },
    (error, response) => {
      if (!error) res.send(response);
    }
  );
};
//Exporting the data
exports.extractData = extractDataFromAylien;

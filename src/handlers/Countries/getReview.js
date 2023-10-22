const axios = require("axios")
// const PLACEID = "ChIJufOZ5uuZMpQRtlMfUenHfz8"
// const APIKEY = "AIzaSyCVmHhNPUI85OMZl3CbVeMpA_SJhb7M41Y"
require("dotenv").config();
const { APIKEY, PLACEID } = process.env;

const getReview = async(req,res) =>{

    try{
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACEID}&fields=reviews&key=${APIKEY}&language=es`) 
        res.status(200).json(data)

    } catch (error){

        res.status(500).json({ error: error.message });

    }
}

module.exports = getReview
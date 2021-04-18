import axios from 'axios';

// require('dotenv').config()

const KEY = process.env.REACT_APP_SECRET_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet", // this includes search basic info, title or description
        maxResults: 5,
        key: KEY,
        safeSearch: "moderate" //you never know what search results will be given, better prevent :)
    }
})

//This parametres are defined in youtube API Reference: https://developers.google.com/youtube/v3/docs/search/list?hl=es#javascript
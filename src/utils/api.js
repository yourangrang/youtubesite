import axios from 'axios';


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 16,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${PROXY}/${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
};
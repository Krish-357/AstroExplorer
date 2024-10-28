import axios from 'axios';

const NASA_API_KEY = '7Z2gDnDr7oZdZGelghxtbpreZzkw5AxcR1h0Eddt';  

export const fetchAPOD = async () => {
  return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
};

export const fetchMissions = async () => {
  return await axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${NASA_API_KEY}`);
};

export const fetchPlanetData = async (planet) => {
  return await axios.get(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`);
};

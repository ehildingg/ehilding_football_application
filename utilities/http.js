import axios from 'axios';

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=0d7f44e18d903ed5036fcfd573be45b7&units=metric&lang=sv&`;

export async function getWeather(lat, lon) {
  const url = `${WEATHER_URL}lat=${lat}&lon=${lon}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

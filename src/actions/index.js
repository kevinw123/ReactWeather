import axios from 'axios';

const API_KEY = '47fee4864d1fb034ed538a73c730c553';
const ROOT_URL= `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
expor const FETCH_WETAHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

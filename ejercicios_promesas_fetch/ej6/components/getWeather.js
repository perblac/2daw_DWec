export function getWeather(lat, lon) {
  const APIKEY = "";
  const WEATHER_URL_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
  return fetch(WEATHER_URL_ENDPOINT+'?lat='+lat+'&lon='+lon+'&appid='+APIKEY+'&lang=es&units=metric')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

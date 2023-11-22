<<<<<<< Updated upstream
=======
import { showCard } from "./showCard";
import { showError } from "./showError";

export function searchCity(city) {
  const APIKEY = "";
  const GEO_URL_ENDPOINT = "http://api.openweathermap.org/geo/1.0/direct";
  return fetch(GEO_URL_ENDPOINT + "?q=" + city + "&limit=100&appid=" + APIKEY)
    .then((response) => response.json())
    .then((data) => {
      if (data.length == 0) {
        throw new Error("Ciudad no encontrada");
      }
      return data;
    })
    .then((data) => showCard(data))
    .catch((error) => showError(error));
}
>>>>>>> Stashed changes

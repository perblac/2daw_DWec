/**
 * Función que obtiene los posts de la base de datos
 * @param {String} URL url de la API
 * @param {Function} callback función que se ejecutará sobre los datos de respuesta
 */
export function getPostsApi(URL, callback) {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => {
      console.error(error);
    });
}

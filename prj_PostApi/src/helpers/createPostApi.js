/**
 * Función que crea un nuevo post en la base de datos
 * @param {String} URL url de la API
 * @param {Object} postData objeto con el post a insertar en la bbdd
 * @param {Function} callback función que se ejecutará sobre los datos de respuesta
 */
export function createPostApi(URL, postData, callback) {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error post data (${response.statusText})`);
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("error en el post", error);
    });
}

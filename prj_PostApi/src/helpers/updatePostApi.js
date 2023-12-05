/**
 * Función que actualiza un post
 * @param {String} URL url de la API
 * @param {Object} updateData objeto con el post actualizado
 * @param {Function} callback función que se ejecutará sobre los datos de respuesta
 */
export function updatePostApi(URL, updateData, callback) {
  fetch(`${URL}/${updateData.id}`, {
    // method: "PATCH",
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en el update (${response.statusText})`);
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
}

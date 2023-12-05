/**
 * Función que elimina un post
 * @param {String} URL url de la API
 * @param {Number} postId id del post a borrar
 * @param {Function} callback función que se ejecutará tras la operación de borrado
 */
export function deletePostApi(URL, postId, callback) {
  fetch(`${URL}/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API no dio el ok (${response.statusText})`);
      }
      callback();
    })
    .catch((error) => {
      console.error("Error al hacer el delete:", error);
    });
}

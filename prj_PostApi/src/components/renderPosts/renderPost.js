/* --------------------------------- imports -------------------------------- */
import "./style.css";
/* ---------------------------- global variables ---------------------------- */
let divPost = "";

/* -------------------------------- functions ------------------------------- */
/**
 * Función que va a pintar en element el objeto posts usando cards de bootstrap
 * @param {HTMLDivElement} element Componente en el que se van a pintar los posts
 * @param {<Object>post} posts Array de posts a pintar
 */
export const renderPosts = (element, posts, clear = 0) => {
  // clear buffer hack
  if (clear) divPost = "";
  posts.forEach((post) => {
    divPost += `
        <div class="card mx-3 bg-light" style="width: 18rem;">
        <div class="card-body" data-id="${post.id}">
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Post nº ${post.id}</h6>
          <p class="card-text">${post.post}</p>
          <a href="#" class="card-link" id="edit-post">Editar</a>
          <a href="#" class="card-link" id="delete-post">Borrar</a>
        </div>
      </div>
      `;
  });
  element.innerHTML = divPost;
};

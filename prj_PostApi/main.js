/* --------------------------------- import --------------------------------- */
import { renderPosts } from "./src/components/renderPosts/renderPost";
import { getPostsApi } from "./src/helpers/getPostsApi";
import { deletePostApi } from "./src/helpers/deletePostApi";
import { createPostApi } from "./src/helpers/createPostApi";
import { updatePostApi } from "./src/helpers/updatePostApi";
// env
const URL = `${import.meta.env.VITE_URL_API}/posts`;

/* ---------------------------- global variables ---------------------------- */
// DOM elements
const postsList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
// form elements
const titlePostInput = document.querySelector("#title-post-input");
const contentPostInput = document.querySelector("#content-post-input");

/* -------------------------------- functions ------------------------------- */
function postClickHandler(e) {
  e.preventDefault();
  const target = e.target;

  let editBtnPress = target.id === "edit-post";
  let deleteBtnPress = target.id === "delete-post";

  const postId = target.parentElement.dataset.id;
  const card = target.closest(".card");

  if (editBtnPress) {
    // si hay alguna card marcada la desmarco
    const selected = document.querySelector(".selected");
    if (selected != null) selected.classList.remove("selected");
    //card actual marcada
    card.classList.add("selected");
    // boton pasa a Editar
    const formBtn = addPostForm.querySelector("button");
    formBtn.classList.add("btn-warning");
    formBtn.textContent = "Editar post";
    formBtn.dataset.id = postId;
    titlePostInput.value = card.querySelector(".card-title").textContent;
    contentPostInput.value = card.querySelector(".card-text").textContent;
    return;
  }

  if (deleteBtnPress) {
    deletePostApi(URL, postId, () => {
      card.remove();
      console.log("Post eliminado con éxito");
      // clear buffer hack
      getPostsApi(URL, (data) => {
        renderPosts(postsList, data,1);
      });
    });
    // si se estaba editando el post borrado, limpiamos el formulario
    const formBtn = addPostForm.querySelector("button");
    if (formBtn.dataset.id == postId) {
      // boton vuelve a Añadir
      formBtn.classList.remove("btn-warning");
      formBtn.textContent = "Añadir post";
      delete formBtn.dataset.id;
      addPostForm.reset();
    }
    return;
  }
}

function formButtonHandler(e) {
  e.preventDefault();

  const target = e.target;

  if (!titlePostInput.value || !contentPostInput.value) {
    // todo: cambiar por un modal
    alert("Por favor rellene Título y Contenido");
    return 1;
  }

  // crear objeto post
  const postData = {
    title: titlePostInput.value,
    post: contentPostInput.value,
  };

  // ver boton y si es añadir o editar
  const formBtn = addPostForm.querySelector("button");
  const editBtn = formBtn.classList.contains("btn-warning");

  // si crear
  if (!editBtn) {
    createPostApi(URL, postData, (data) => {
      const arrayPost = [];
      arrayPost.push(data);
      renderPosts(postsList, arrayPost);
    });

    target.reset();
    return;
  }
  // si editar
  else {
    postData.id = formBtn.dataset.id;
    const card = postsList.querySelector(`[data-id = "${postData.id}"]`);

    const cardTitle = card.querySelector(".card-title");
    const cardText = card.querySelector(".card-text");
    if (!card) {
      alert("Ya no existe el post");
      target.reset();
      return;
    }

    updatePostApi(URL, postData, (data) => {
      console.log("Post editado con éxito");
      console.log(data);
      cardTitle.textContent = data.title;
      cardText.textContent = data.post;

      // boton vuelve a Añadir
      formBtn.classList.remove("btn-warning");
      formBtn.textContent = "Añadir post";
      delete formBtn.dataset.id;

      card.parentElement.classList.remove("selected");

      target.reset();
    });
    return;
  }
}

function keyHandler(e) {
  if (e.key == "Escape") {
    addPostForm.reset();

    const formBtn = addPostForm.querySelector("button");
    if (formBtn.classList.contains("btn-warning")) {
      // boton vuelve a Añadir
      formBtn.classList.remove("btn-warning");
      formBtn.textContent = "Añadir post";
    }

    // si hay alguna card marcada la desmarco
    const selected = document.querySelector(".selected");
    if (selected != null) selected.classList.remove("selected");
  }
}

/**
 * Función de inicio
 */
function init() {
  // captamos el evento submit del formulario
  addPostForm.addEventListener("submit", formButtonHandler);
  // y el evento click sobre la lista de posts
  postsList.addEventListener("click", postClickHandler);

  addPostForm.addEventListener("keydown", keyHandler);

  // cargar los posts y pintarlos
  getPostsApi(URL, (data) => {
    renderPosts(postsList, data);
  });
}

/* -------------------------------- App Init -------------------------------- */
document.addEventListener("DOMContentLoaded", init);

/* ---------------- Ejercicio 1: Cargar Imagen Asíncronamente --------------- */

// Crea una función que cargue una imagen de forma asíncrona y la añada al cuerpo del documento. La función loadAsync se le pasará una src como parámetro. La función debe devolver una promesa que se resuelva con la imagen cargada o se rechace si hay algún error. Para simular asincronía, la imagen se cargará transcurridos 2 segundos. Mientras tanto debe de aparecer por pantalla `loading...``
const loadAsync = (src) => {
  const promesa = new Promise((resolve, reject) => {
    const imagen = new Image();
    imagen.onerror = () => reject(new Error("La imagen no se cargó correctamente"));
    imagen.onload = () => resolve(imagen);
    setTimeout(() => {
        imagen.src = src;
    }, 2000);
  });
  return promesa;
};

const container = document.querySelector(".image-container");
container.innerText = "loading...";
loadAsync("img.jpg")   // Imagen que existe
// loadAsync("img2.jpg")   // Imagen que no existe
  .then((element) => {
    container.innerText = "";
    container.appendChild(element);
    return element;
  })
  .catch((error) => (container.innerText = error));

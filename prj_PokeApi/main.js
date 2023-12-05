//import

import { getPokemonsApi } from "./src/helpers/getPokemonsApi";
import { renderCardPokemon } from "./src/components/renderCard/renderCardPokemon"

const contenedor = document.querySelector('#app');
contenedor.style.display = 'flex';
contenedor.style.flexWrap = 'wrap';

//load cards
const pokemons = await getPokemonsApi('http://localhost:4000/pokemons');

// pintar en app tantas cards como haya en la bbdd
for (const dataPoke of pokemons) {
  renderCardPokemon(contenedor, dataPoke);
}

function rotateCard(e) {
  const card = e.target.closest('.card');
  const image = card.querySelector('img');
  console.log(card);
  if (!card.classList.contains('rotado')) {
    card.classList.add('rotado');
    image.src = card.dataset.srcBack;
  } else {
    card.classList.remove('rotado');
    image.src = card.dataset.srcFront;
  }
}

// con un clic hacer la vuelta a la carta
contenedor.addEventListener('click', rotateCard);
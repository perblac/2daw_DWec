import './style.css';

export function renderCardPokemon(element, dataPokemon) {
  // crear una card bootstrap
  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";
  card.dataset.srcFront = dataPokemon.images.url_front;
  card.dataset.srcBack = dataPokemon.images.url_back;  
  const cardImg = document.createElement("img");
  cardImg.src = dataPokemon.images.url_front;
  card.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = dataPokemon.name;
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = "Habilidades:";
  cardBody.appendChild(cardText);
  for (const habilidad of dataPokemon.abilities) {
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent += `${habilidad}`;
    cardBody.appendChild(cardText);
  }

  card.appendChild(cardBody);
  element.appendChild(card);
}

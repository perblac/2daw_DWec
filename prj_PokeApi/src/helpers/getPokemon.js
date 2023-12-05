//saca la info de la url y devuelve un objeto con ella
export async function getPokemon(url) {
  try {
    const pokemon = {};
    const response = await fetch(url);
    const data = await response.json();
    const {
      sprites: {
        versions: {
          ["generation-v"]: {
            ["black-white"]: { animated },
          },
        },
      },
    } = data;
    pokemon.name = data.name;
    pokemon.url = url;
    pokemon.images = {};
    pokemon.images.url_front = animated.front_default;
    pokemon.images.url_back = animated.back_default;
    pokemon.abilities = [];
    for (let objAbility of data.abilities) {
      pokemon.abilities.push(objAbility.ability.name);
    }
    return pokemon;
  } catch (error) {
    console.error(`Error accessing pokeapi/pokemon: ${error.message}`);
  }
}

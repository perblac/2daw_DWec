export async function getPokemonsApi(url) {
  try {
    const data = await fetch(url);
    const pokemons = await data.json();
    console.log(pokemons);
    return pokemons;
  } catch (error) {
    console.error(`Error accessing json db: ${error.message}`);
  }
}

/* ------------------------------- node-fetch ------------------------------- */

//getPokemon

// const { default: fetch } = require("node-fetch");
import fetch from "node-fetch";
import fs from "fs/promises";
import { getPokemon } from "./getPokemon.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const filepath = "./server/db.json";

async function fetchAndSave() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { a, b, c, results } = data;
    const pokemons = [];
    for (let object of results) {
      pokemons.push(await getPokemon(object.url));
    }
    // meter el objeto info de cada pokemon en el result
    await fs.writeFile(filepath, JSON.stringify({ pokemons }, "null", 2));
  } catch (error) {
    console.error(`Error accessing pokeapi: ${error.message}`);
  }
}

fetchAndSave();

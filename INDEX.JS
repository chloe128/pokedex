const poke_container = document.getElementById("poke-container");
//console.log(poke_container)
const pokemon_count = 150;

const fetchPokemons = async () => {
  for (let id = 1; id <= pokemon_count; id++) {
    //call a function that meakes the api call
    await getPokemon(id); //1.2,3,4....
  }
};

const getPokemon = async (id) => {
  try {
    //api call to pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(url);
    const pokemon = await response.json();
    createPokemonCard(pokemon);
    //console.log(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const pokemonInnerHTML = `
  <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number"> ${pokemon.id}</span>
          <h3 class="name"> ${pokemon.name}</h3>
          <small class="type">Type <span> ${pokemon.types[0].type.name}</span></small>
        </div>
     `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
  //console.log(pokemonEl);
};

fetchPokemons();

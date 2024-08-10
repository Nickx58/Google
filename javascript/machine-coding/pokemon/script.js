const container = document.getElementById("container");

async function fetchPokemonByUrl(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return {
        name: data.name,
        abilities: data.abilities.map(
          (abilityInfo) => abilityInfo.ability.name
        ),
      };
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

async function fetchPokemonDetails(urls) {
  const pokemonsDetailPromises = urls.map((url) => {
    return fetchPokemonByUrl(url);
  });
  const pokemonData = await Promise.all(pokemonsDetailPromises);
  pokemonData.forEach((pokemon) => {
    if (pokemon) {
      const li = document.createElement("li");
      li.textContent = pokemon.name;

      //create a nested ull
      const abilitiesList = document.createElement("ul");
      pokemon.abilities.forEach((ability) => {
        const li = document.createElement("li");
        li.textContent = ability;
        abilitiesList.appendChild(li);
      });
      li.appendChild(abilitiesList);
      container.appendChild(li);
    }
  });
}

async function fetchAllPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    );
    if (response.ok) {
      const data = await response.json();
      const urls = data.results.map((pokemon) => pokemon.url);
      fetchPokemonDetails(urls);
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchAllPokemon();

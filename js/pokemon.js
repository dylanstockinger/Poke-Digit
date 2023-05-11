const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const pokeContainer = document.querySelector(".pokemon-container");

const displayCharacter = (pokemon) => {
  pokeContainer.innerHTML = `
  <img data-pokemon-image src="${pokemon.sprites.regular}" alt="">
  <h1> ${pokemon.name.fr}</h1>
  
  
  `;
};

getOnePokemon = async () => {
  try {
    const res = await fetch(
      `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`
    );
    pokemonCharacter = await res.json();
    displayCharacter(pokemonCharacter);

    console.log(pokemonCharacter);
  } catch (err) {
    console.error(err);
  }
};

getOnePokemon();

const dataPokemonCards = document.querySelector(".main-container");
const searchBar = document.getElementById("searchbar");
let pokemonCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredPokemons = pokemonCharacters.filter((pokemon) => {
    return (
      pokemon.name.fr.toLowerCase().includes(searchString) ||
      pokemon.sprites.regular.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredPokemons);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon");
    pokemonCharacters = await res.json();
    displayCharacters(pokemonCharacters);
  } catch (err) {
    console.error(err);
  }
};
const displayCharacters = (characters) => {
  const htmlString = characters.map((pokemon) => {
    return `
    <a class="links-card" href="">

        <div class="pokemon-card" data-pokemon-cards>
    
    
    <img data-pokemon-image src="${pokemon.sprites.regular}" alt="">
    <div class="border-card">
      <h3 data-name> ${pokemon.name.fr} </h3>
    
      <div class="pokemon-type-details">
    
  
    </div>
    </div>
    </div>
    </a>
     `;
  });

  dataPokemonCards.innerHTML = htmlString;
};

loadCharacters();

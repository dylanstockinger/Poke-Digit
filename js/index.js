const dataPokemonCards = document.querySelector(".main-container");

let pokemonCharacters = [];

const loadCharacters = async () => {
  try {
    const res = await fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon");
    pokemonCharacters = await res.json();
    displayCharacters(pokemonCharacters);
    console.log(pokemonCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters

    .map((pokemon) => {
      return `

    <a class="links-card" href="pokemon.html?id=${pokemon.pokedexId}">

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
    })
    .join("");

  dataPokemonCards.innerHTML = htmlString;
};

loadCharacters();

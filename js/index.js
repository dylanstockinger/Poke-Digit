const dataPokemonCards = document.querySelector(".main-container");

fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon")
  .then((res) => res.json())
  .then((data) => {
    dataPokemonCards.innerHTML = data.map((pokemon) => {
      return `

    <div class="pokemon-card" data-pokemon-cards>


<img data-pokemon-image src="${pokemon.sprites.regular}" alt="">
<div class="border-card">
  <h3 data-name> ${pokemon.name.fr} </h3>

  <div class="pokemon-type-details">

  <div class="button-call">
    <button  class="call-to-action" id="btn"> CLICK </button>

  </div>
</div>
</div>
</div>
 `;
    });
  });

const filterPokemonGeneration = document.querySelector(".generation-container");
console.log(filterPokemonGeneration);

fetch("https://api-pokemon-fr.vercel.app/api/v1/pokemon")
  .then((res) => res.json())
  .then((data) => {});

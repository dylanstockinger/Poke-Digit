const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const pokeContainer = document.querySelector(".pokemon-container");

const displayCharacter = (pokemon) => {
  pokeContainer.innerHTML = `
  <div class="pokemon-container">
    <div class="background-container">
      <img data-pokemon-image src="${pokemon.sprites.regular}" alt="">
      <h1> ${pokemon.name.fr}</h1>
      ${pokemon.types.map((type) => `<h1>${type.name}</h1>`).join("")}
    </div>
  </div>
  `;
};

getOnePokemon = async () => {
  try {
    const res = await fetch(
      `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`
    );
    pokemonCharacter = await res.json();
    displayCharacter(pokemonCharacter);
    backgroundColorChangeToggle(pokemonCharacter.types[0].name);

    console.log(pokemonCharacter);
  } catch (err) {
    console.error(err);
  }
};
backgroundColorChangeToggle = (type) => {
  if (type === "Plante") {
    document.body.style.backgroundColor = "green";
  }
  switch (type) {
    case "Plante":
      document.body.style.backgroundColor = "green";
      break;
    case "Poisson":
      document.body.style.backgroundColor = "blue";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case "Feu":
      document.body.style.backgroundColor = "red";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case "Eau":
      document.body.style.backgroundColor = "#44A9C8";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case "Insecte":
      document.body.style.backgroundColor = "#A7BC5D";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case "Normal":
      document.body.style.backgroundColor = "#E1DAAA";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    case "Poison":
      document.body.style.backgroundColor = "#7D6A96";
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
};

getOnePokemon();
backgroundColorChangeToggle();

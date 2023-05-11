const searchBar = document.getElementById("searchbar");

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

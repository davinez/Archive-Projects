const shuffleCards = (pokemonArray) => {
  for (let i = pokemonArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemonArray[i];
    pokemonArray[i] = pokemonArray[j];
    pokemonArray[j] = temp;
  }
  return pokemonArray;
};

export default shuffleCards;

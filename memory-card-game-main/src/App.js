import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import pokemonData from './pokemonData';
import shuffleCards from './utils';

const App = () => {
  const [pressedCards, setPressesCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [pokemonArray, setPokemonArray] = useState(pokemonData);

  /*
1- React batched multiple setState calls and render them all at once, 
because we're inside a synthetic event handler (onClick)
2- 'id' of the clicked image
*/
  const handleImageClick = (id) => {
    if (pressedCards.includes(id)) {
      if (score > highestScore) {
        setHighestScore(score);
      }
      setScore(0);
      setPressesCards([]);
    } else {
      setPressesCards([...pressedCards, id]);
      setScore(score + 1);
      if (pressedCards.length === 12) {
        alert('You Win!');
        setScore(0);
        setPressesCards([]);
      }
    }
    setPokemonArray(shuffleCards(pokemonData));
  };

  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} highestScore={highestScore} />
      <div className="card-container">
        <Card pokemon={pokemonArray} onClick={handleImageClick} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove, reset } from '../features/pokeApiSlice';
import styles from '../styles/Pokemon.module.css';
import defaultPokemon from '../assets/defaultPokemon.jpg';

// funcion para extraer dato especifico de la store
const getPokemon = (state, id) => {
  return state.pokeApi.pokemons.find((pokemon) => pokemon.id === Number(id));
};

function Pokemon() {
  const { id } = useParams();
  const pokemonData = useSelector((state) => getPokemon(state, id));
  const pokemonDataLength = useSelector(
    (state) => state.pokeApi.pokemons.length
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const eliminarPokemon = () => {
    if (pokemonDataLength <= 1) {
      dispatch(reset());
    } else {
      dispatch(remove(id));
    }

    // redirect a la ruta de inicio
    history.push('/');
  };

  return (
    <div>
      <main className={styles['container']}>
        {pokemonData ? (
          <div className={styles['card']}>
            {/* Coloca imagen por defecto si no existe la propiedad del objeto */}
            <img
              src={
                pokemonData.sprites.front_default
                  ? pokemonData.sprites.front_default
                  : defaultPokemon
              }
              alt="Imagen Pokemon"
            />

            <h2>{pokemonData.name}</h2>
            <p>
              <strong>Peso:</strong> {pokemonData.weight / 10} Kgs
            </p>
            <p>
              <strong>Altura:</strong> {pokemonData.height / 10} mts
            </p>
            <p>
              <strong>Tipo:</strong> {pokemonData.types[0].type.name}
            </p>
            <p>
              <strong>Ataque:</strong> {pokemonData.moves[0].move.name}
            </p>
            <p>
              <strong>Habilidad:</strong>{' '}
              {pokemonData.abilities[0].ability.name}
            </p>
            <div>
              <button type="button" onClick={eliminarPokemon}>
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <p>No encontrado!</p>
        )}
      </main>
    </div>
  );
}

export default Pokemon;

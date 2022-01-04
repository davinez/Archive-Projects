import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import SearchForm from '../components/SearchForm';
import styles from '../styles/Salon.module.scss';
import defaultPokemon from '../assets/defaultPokemon.jpg';
import BotonFlotante from '../components/BotonFlotante';

function Salon() {
  const pokemonData = useSelector((state) => state.pokeApi.pokemons);

  return (
    <main className={styles['container']}>
      <div className={styles['form-container']}>
        <SearchForm />
      </div>
      <div className={styles['cards-container']}>
        {pokemonData && (
          <>
            {/* llenar y generar una 'carta' por cada objeto contenido en el estado */}
            {pokemonData.map((pokemon) => (
              <div key={uniqid()} className={styles['card']}>
                {/* Coloca imagen por defecto si no existe la propiedad del objeto */}
                <img
                  src={
                    pokemon.sprites.front_default
                      ? pokemon.sprites.front_default
                      : defaultPokemon
                  }
                  alt="Imagen Pokemon"
                />

                <p>{pokemon.name}</p>
                <p>Peso: {pokemon.weight / 10} Kgs</p>
                <p>Altura: {pokemon.height / 10} mts</p>
                <p>Tipo: {pokemon.types[0].type.name}</p>
                <Link to={`/salon/${pokemon.id}`}>
                  <button type="button">Info</button>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
      <BotonFlotante />
    </main>
  );
}

export default Salon;

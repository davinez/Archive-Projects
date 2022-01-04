import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/pokeApiSlice';

function SearchForm() {
  const pokemonData = useSelector((state) => state.pokeApi.pokemons);
  const [nombreInput, setNombreInput] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Revisa si la 'store' ya contiene el valor
  const checkDuplicados = () => {
    const index = pokemonData.findIndex(
      (pokemon) => pokemon.name === nombreInput.toLowerCase()
    );
    if (index !== -1) {
      return true;
    }
    return false;
  };

  const handleInputChange = (e) => {
    setNombreInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('');

    // La API no reconoce strings con mayusculas
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nombreInput.toLowerCase()}`)
      // Success
      .then((response) => {
        if (checkDuplicados()) {
          setMessage('Pokemon ya ingresado!');
        } else {
          dispatch(add(response.data));
        }
      })
      // Error
      .catch((error) => {
        const resMessage =
          // Posibles formatos del 'response.body'
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Validacion de formulario, usando las funciones integradas de HTML5 */}
        <input
          id="formName"
          name="pokemonName"
          minLength="3"
          maxLength="15"
          onChange={handleInputChange}
          value={nombreInput}
          placeholder="Charizard"
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default SearchForm;

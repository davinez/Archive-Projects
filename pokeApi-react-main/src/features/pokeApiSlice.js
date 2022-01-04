import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Array de objetos
  pokemons: [],
};

// Immer library y Redux Toolkit permiten realizar mutaciones en los estados
const pokeApiSlice = createSlice({
  name: 'pokeApi',
  initialState,
  reducers: {
    add: (state, action) => {
      state.pokemons.push(action.payload);
    },

    remove: (state, action) => {
      // generar nuevo array
      const newState = state.pokemons.filter(
        (pokemon) => pokemon.id !== Number(action.payload)
      );
      // guardar nuevo array al mutar estado existente
      state.pokemons = newState;
    },
    reset: (state) => initialState,
  },
});

export const { add, remove, reset } = pokeApiSlice.actions;

export default pokeApiSlice.reducer;

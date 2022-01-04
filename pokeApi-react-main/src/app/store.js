import { configureStore } from '@reduxjs/toolkit';
import pokeApiReducer from '../features/pokeApiSlice';

export default configureStore({
  reducer: {
    pokeApi: pokeApiReducer,
  },
});

// Ensure that the initial state of favoriteMovies in your reducer is correctly initialized with the movies array
import { createSlice } from '@reduxjs/toolkit';

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: {
    movies: [], // Make sure movies array is initialized here
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;

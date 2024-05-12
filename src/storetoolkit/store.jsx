
// Make sure favoriteMoviesReducer is correctly imported and registered in your Redux store setup
import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from '../Slice/slice';

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    // Other reducers if any
  },
});

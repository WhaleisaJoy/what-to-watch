import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { films } from '../mock/film';
import { INITIAL_GENRE } from '../const';
import { getAllGenresFromFilms } from '../utils';

const initialState = {
  films: films,
  currentGenre: INITIAL_GENRE,
  allGenres: getAllGenresFromFilms(films),
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    changeGenre(state, action: PayloadAction<string>) {
      state.currentGenre = action.payload;
    },
  },
});

export const { changeGenre } = interfaceSlice.actions;
export default interfaceSlice.reducer;

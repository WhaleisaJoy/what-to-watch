import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { films } from '../mock/film';
import { INITIAL_GENRE, INITIAL_MAX_FILM_CARDS_AMOUNT } from '../const';
import { getAllGenresFromFilms } from '../utils';

const initialState = {
  films: films,
  currentGenre: INITIAL_GENRE,
  allGenres: getAllGenresFromFilms(films),
  filmsAmountToRender: INITIAL_MAX_FILM_CARDS_AMOUNT,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    changeGenre(state, action: PayloadAction<string>) {
      state.currentGenre = action.payload;
    },
    changeFilmsAmountToRender(state, action: PayloadAction<number>) {
      state.filmsAmountToRender += action.payload;
    },
    resetGenre(state) {
      return {
        ...state,
        currentGenre: initialState.currentGenre,
      };
    },
    resetFilmsAmountToRender(state) {
      return {
        ...state,
        filmsAmountToRender: initialState.filmsAmountToRender,
      };
    },
  },
});

export const { changeGenre, changeFilmsAmountToRender, resetGenre, resetFilmsAmountToRender } = interfaceSlice.actions;
export default interfaceSlice.reducer;

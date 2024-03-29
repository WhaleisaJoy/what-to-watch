import type { StateType } from '../types/state';

export const getCurrentGenre = (state: StateType):string => state.currentGenre;

export const getAllGenres = (state: StateType):string[] => state.allGenres;

export const getrenderedFilmCardsAmount = (state: StateType):number => state.filmsAmountToRender;

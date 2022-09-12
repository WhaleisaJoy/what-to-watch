import { INITIAL_GENRE } from './const';
import type { Film } from './types/film';

export const getAllGenresFromFilms = (films: Film[]) => [INITIAL_GENRE, ...new Set(films.map((film) => film.genre))];

export const getFilmsByGenre = (films: Film[], genre: string) => genre === INITIAL_GENRE ? films : films.filter((film) => film.genre === genre);

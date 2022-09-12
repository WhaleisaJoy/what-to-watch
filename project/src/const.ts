export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const INITIAL_GENRE = 'All genres';

export const MAX_GENRE_AMOUNT = 9;

export const INITIAL_MAX_FILM_CARDS_AMOUNT = 8;

export const RENDER_FILM_CARDS_STEP = 8;

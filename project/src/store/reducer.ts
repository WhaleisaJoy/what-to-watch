// import { createReducer } from '@reduxjs/toolkit';
// import { genres } from '../database';
// import { films } from '../mock/film';
// import { changeGenre } from './action';

// const initialState = {
//   genre: genres[0],
//   films: films,
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeGenre, (state, {payload}) => {
//       state = {...state, genre: payload.genre};
//     });
// });

// export { reducer };


import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { genres } from '../database';
import { films } from '../mock/film';

const initialState = {
  genre: genres[0],
  films: films,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    changeGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
  },
});

export const { changeGenre } = interfaceSlice.actions;
export default interfaceSlice.reducer;

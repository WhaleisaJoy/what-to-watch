import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{genre: string}>('main/changeGenre');

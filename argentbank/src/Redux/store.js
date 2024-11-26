import { configureStore } from '@reduxjs/toolkit';
import { loginUser } from './LoginSlice';
import { updateAccountSlice } from './UpdateAccountSlice';

const store = configureStore({
  reducer: {
    login: loginUser.reducer,
    profil: updateAccountSlice.reducer,
  },
});

export default store;
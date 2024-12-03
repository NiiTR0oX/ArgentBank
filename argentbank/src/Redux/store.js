import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
// import updateAccountReducer from './UpdateAccountSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    // profil: updateAccountReducer,
  },
});

export default store;
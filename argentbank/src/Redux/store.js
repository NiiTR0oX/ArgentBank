import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
import ProfileSlice from './ProfileSlice';
import { updateProfileSlice } from './UpdateProfileSlice';
// import updateAccountReducer from './UpdateAccountSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: ProfileSlice,
    upadateProfile: updateProfileSlice,
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
import ProfileSlice from './ProfileSlice';
import { updateProfileSlice } from './UpdateProfileSlice';

 // il regroupe tout les reducers en un seul store

const store = configureStore({
  reducer: {
    login: loginReducer, // Gère l'état lié à la connexion
    profile: ProfileSlice, // Gère l'état du profil utilisateur
    upadateProfile: updateProfileSlice, // Gère la mise à jour du profil
  },
});

export default store;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une API pour mettre à jour les données utilisateur
export const updateUserData = createAsyncThunk(
  'updateAccount/updateUserData', // Action type
  async (user, thunkAPI) => {
    console.log(user); // Pour vérifier les données envoyées
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`, // Ajouter le token dans l'en-tête Authorization
        },
        body: JSON.stringify({
          userName: user.username, // Le username mis à jour
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data'); // Gestion des erreurs si la requête échoue
      }

      const updateProfileResponse = await response.json();
      console.log(updateProfileResponse.body)
      return updateProfileResponse.body; // Retourne les données mises à jour
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Capture l'erreur et la retourne au thunk
    }
  }
);

const initialState = {
  user: null, // Données utilisateur
  loading: false, // Indicateur de chargement
  error: null, // Gestion des erreurs
};

export const updateProfileSlice = createSlice({
  name: 'updateAccount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserData.pending, (state) => {
        state.loading = true; // Début du chargement
        state.error = null; // Réinitialise les erreurs
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false; // Fin du chargement
        state.user = action.payload; // Met à jour l'utilisateur avec les nouvelles données
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false; // Fin du chargement
        state.error = action.payload; // Stocke l'erreur
      });
  },
});

export default updateProfileSlice.reducer;
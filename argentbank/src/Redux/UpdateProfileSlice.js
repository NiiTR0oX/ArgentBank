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
  extraReducers: (builder) => { // Le tableau extraReducers est utilisé pour gérer les trois différents états de l'action asynchrone
    builder
      .addCase(updateUserData.pending, (state) => { // Ce reducer est activé lorsque l'action updateUserData est en train d'être traitée, avant que la réponse de l'API ne soit reçue.
        state.loading = true; // state.loading = true : Définit l'état de loading à true, indiquant à l'interface utilisateur que l'opération est en cours et que l'on attend une réponse.
        state.error = null; // state.error = null : Réinitialise les erreurs précédentes, afin de supprimer les erreurs liées à une opération précédente, le cas échéant.
      })
      .addCase(updateUserData.fulfilled, (state, action) => { // Ce reducer est appelé lorsque la requête API pour mettre à jour les données utilisateur réussit, c'est-à-dire lorsque l'action updateUserData est remplie avec succès.
        state.loading = false; // state.loading = false : Définit l'état de loading à false, indiquant que l'opération est terminée
        state.user = action.payload; // state.user = action.payload : Mette à jour les données de l'utilisateur dans l'état avec la réponse retournée par l'API
      })
      .addCase(updateUserData.rejected, (state, action) => { // Ce reducer est activé lorsque la requête API pour mettre à jour les données utilisateur échoue, c'est-à-dire lorsque l'action updateUserData est rejetée.
        state.loading = false; // state.loading = false : Définit l'état de loading à false, indiquant que l'opération est terminée, bien que l'API ait échoué
        state.error = action.payload; // state.error = action.payload : Stocke l'erreur retournée par l'API (contenue dans action.payload
      });
  },
});

export default updateProfileSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une API pour récupérer les données utilisateur
export const fetchUserData = createAsyncThunk(
  'profile/fetchUserData',
  async (token, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
        const profile = await response.json()
        console.log(profile.body)
        return profile.body
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    status: null,
    error: null,
  }, 
  reducers: {
    logout:(state) => { // Ce reducer est utilisé pour réinitialiser l'état lorsque l'utilisateur se déconnecte.
      state.user = null;
      state.status = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => { // Ce reducer est appelé lorsque la requête pour récupérer les données utilisateur (fetchUserData) est en cours.
        state.status = "loading"; // Il met à jour l'état en définissant status = "loading", ce qui peut être utilisé pour afficher un indicateur de chargement
      })
      .addCase(fetchUserData.fulfilled, (state, action) => { // Ce reducer est appelé lorsque l'API a réussi à renvoyer les données utilisateur (la requête a réussi).
        state.user = action.payload; // state.user est mis à jour avec les données reçues de l'API, ce qui permet d'afficher ces données dans l'interface utilisateur
        state.status = "succès"; // state.status est défini sur "succès", ce qui indique que les données ont été récupérées avec succès.
      })
      .addCase(fetchUserData.rejected, (state, action) => { // Ce reducer est appelé si l'API échoue à renvoyer les données utilisateur (par exemple, si l'API est hors ligne ou si les informations sont incorrectes)
        state.status = "failed"; // state.status est mis à "failed" pour indiquer que la requête a échoué.
        state.error = action.payload||"fail to fetch data"; // state.error est défini sur l'erreur retournée par l'API (ou un message par défaut
      });
  },
});

export default profileSlice.reducer;
export const {logout} = profileSlice.actions;
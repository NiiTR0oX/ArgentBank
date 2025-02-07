import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une fonction d'authentification asynchrone
export const loginUser = createAsyncThunk('login/loginUser', async (credentials, thunkAPI) => {
  const { email, password } = credentials;
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Password is invalid');
    }

    const data = await response.json();
    return data.body.token; // Supposons que l'API retourne un token
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token:"",
    loginError: null,
    loading: false,
  },
  reducers: { // ce reducer permet pour mettre à jour l'état du token
    login: (state, action) => {
      state.token=action.payload.token;
      state.loginError= null;
    },
    logout: (state) => {
      state.token="" // ce reducer est utilisé pour vider le token lors de la déconnexion
    },
  },
  extraReducers: (builder) => { // ExtraReducers Gèrent les actions asynchrones (pending, fulfilled, rejected) pour les utilisations HTTP
    builder
      .addCase(loginUser.pending, (state) => { // Ce reducer est appelé lorsque l'action asynchrone loginUser commence à s'exécuter. Il active l'indicateur de chargement
        state.loading = true;
        state.loginError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => { //Ce reducer est appelé lorsque l'action loginUser réussit (après une connexion réussie).
        state.loading = false; // Il met à jour l'état du token avec le token renvoyé par l'API et arrête l'indicateur de chargement (loading).
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => { // Ce reducer est appelé lorsque l'action loginUser échoue (par exemple, si l'API renvoie une erreur de connexion).
        state.loading = false; // Il arrête l'indicateur de chargement (loading) et enregistre le message d'erreur dans loginError, que vous pourrez afficher à l'utilisateur.
        state.loginError = action.payload; 
      });
  },
});

export const {login, logout } = loginSlice.actions;
export default loginSlice.reducer;
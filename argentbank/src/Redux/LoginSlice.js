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
      throw new Error('Invalid credentials');
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
  reducers: {
    login: (state, action) => {
      state.token=action.payload.token;
      state.loginError= null;
    },
    logout: (state) => {
      state.token=""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      });
  },
});

export const {login, logout } = loginSlice.actions;
export default loginSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une API pour récupérer les données utilisateur
export const fetchUserData = createAsyncThunk(
  'profile/fetchUserData',
  async (token, thunkAPI) => {
    // console.log(thunkAPI.getState().login.token)
    // console.log(token)
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

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
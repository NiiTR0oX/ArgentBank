import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simuler une API pour récupérer les données utilisateur
export const updateUserData = createAsyncThunk(
  'updateAccount/updateUserData',
  async (user, thunkAPI) => {
    // console.log(thunkAPI.getState().login.token)
    console.log(user)
    debugger
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          userName: user.username
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const updateProfileResponse = await response.json()
      return updateProfileResponse.body
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

export const updateProfileSlice = createSlice({
  name: 'updateAccount',
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

export default updateProfileSlice.reducer;

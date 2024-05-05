import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // action refers to the browser/signin
    signInSuccess: (state, action) => {
      // the user data is payload
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// there are only 3 possible outcomes for signin.
// export the following so we can use them in other pages
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
// since we export as default we can change its name in the store.js when its imported
export default userSlice.reducer;

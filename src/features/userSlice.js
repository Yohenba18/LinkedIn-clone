import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.user =  null;
    },
  },
});

export const { login,logout } = userSlice.actions;

//selectors it allows us to select the user from the redux, or say to extract th user from the redux 
export const selectUser = state => state.counter.user;

export default userSlice.reducer;

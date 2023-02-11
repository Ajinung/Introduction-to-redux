import { createSlice } from "@reduxjs/toolkit";

//creating an object/state
const initialState = {
  current: null,
};

//creating the reducer state
const ReduxState = createSlice({
  name: "users",

  initialState,
  reducers: {
    loginUser: (state, actions) => {
      state.current = actions.payload;
    },
    logOutUser: (state) => {
      state.current = null;
    },
  },
});

export const { loginUser, logOutUser } = ReduxState.actions; //exporting functions

export default ReduxState.reducer;

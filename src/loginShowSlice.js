import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const loginShowSlice = createSlice({
  name: "loginShowSlice",
  initialState,
  reducers: {
    setLoginPage(state, action) {
      state.show = action.payload;
    },
  },
});

export const { setLoginPage } = loginShowSlice.actions;

export default loginShowSlice.reducer;

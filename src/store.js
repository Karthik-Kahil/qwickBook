import { configureStore } from "@reduxjs/toolkit";
import loginShowSlice from "./loginShowSlice";

const store = configureStore({
  reducer: {
    loginShowSlice: loginShowSlice,
  },
});

export default store;

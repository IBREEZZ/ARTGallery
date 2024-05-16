//store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/UserSlice";
import artReducer from "./Features/ArtSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    art: artReducer,
  },
});

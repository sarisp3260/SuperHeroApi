import { configureStore } from "@reduxjs/toolkit";
import herosReducer from "../features/heros/HerosSlice";

export const store = configureStore({
  reducer: {
    heros: herosReducer
  }
});
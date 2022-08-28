import { configureStore } from "@reduxjs/toolkit";
import { herosApi }  from './services/HerosApi'

export const store = configureStore({
  reducer: {
    [herosApi.reducerPath]: herosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(herosApi.middleware),
});
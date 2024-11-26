import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { waqtiApi } from "./waqti";

export const store = configureStore({
  reducer: {
    [waqtiApi.reducerPath]: waqtiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(waqtiApi.middleware),
});

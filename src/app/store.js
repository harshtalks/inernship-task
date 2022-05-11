import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});

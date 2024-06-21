import { configureStore } from "@reduxjs/toolkit";
import createNote  from "./features/noteSlice";

const store = configureStore({
  reducer: {
    notes: createNote,
  },
});
export default store;

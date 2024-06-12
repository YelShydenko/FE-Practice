import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import postSlice from "../post/postSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    post: postSlice,
  },
});

// store.subscribe(() => console.log(store.getState()));

export default store;

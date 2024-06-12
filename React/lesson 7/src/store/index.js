import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import postSlice from './features/post/postSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        post: postSlice
    }
});

export default store;
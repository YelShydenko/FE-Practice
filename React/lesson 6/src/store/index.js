// import { createStore } from 'redux';
// import reducer from './reducers/reducer';


// let store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/accountReducer";

const store = configureStore({
    reducer: {
        account: accountReducer
    }
})

store.subscribe(() => console.log(store.getState()))

export default store;
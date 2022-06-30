import { combineReducers, createStore} from "@reduxjs/toolkit";



let reducers = combineReducers({

});

const store = createStore(
    reducers,
);
export default store;
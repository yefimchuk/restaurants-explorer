import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import {articles} from "./reducer/articles.slice";

import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


let reducers = combineReducers({
    articles : articles.reducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
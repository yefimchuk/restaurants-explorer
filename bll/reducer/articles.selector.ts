import {createSelector} from "reselect";

const selectSelf = (state: object) => state;
export const selectArticles = createSelector(
    selectSelf,
    (state: any) => state.articles
);
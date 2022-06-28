import {createSelector} from "reselect";

const selectSelf = (state: object) => state;
export const selectArticles = createSelector(
    selectSelf,
    (state: any) => state.articles
);
export const selectSearchValue  = createSelector(
    selectSelf,
    (state: any) => state.articles.searchValue
);
export const selectDateTime  = createSelector(
    selectSelf,
    (state: any) => state.articles.searchValue
);
export const selectTotalPage  = createSelector(
    selectSelf,
    (state: any) => state.articles.total
);
export const selectError  = createSelector(
    selectSelf,
    (state: any) => state.articles.error
);
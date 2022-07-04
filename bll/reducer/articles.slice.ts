import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import newsServiceInstance from "../../service/serviceNews";

export const fetchArticles: any = createAsyncThunk(
    "articles/fetchArticles",
    async ({page, values, } : {page : number, values?: string}, {rejectWithValue}) => {

        try {
            return await newsServiceInstance.fetchNews({page, values});
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


export const articles: any = createSlice({
    name: "articles",
    initialState: {
        newsData: null,
        page: 0,
        total: null,
        isFetching: false
    } as any,
    reducers: {},
    extraReducers: {
        [fetchArticles.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.newsData = action.payload.data.articles;
            state.total = action.payload.data.totalResults
            state.isFetching = false;
        },
        [fetchArticles.rejected]: (state, action) => {
            state.errors = action.payload.data;
            state.isFetching = false;
        },
    },
});
export default articles.reducer;
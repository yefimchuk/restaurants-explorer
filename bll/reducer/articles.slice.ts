import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import newsServiceInstance from "../../service/serviceNews";

export const fetchArticles: any = createAsyncThunk(
    "articles/fetchArticles",
    async ({
               page,
               values,
               FDate,
               sort
           }: { page: number, values?: string, FDate?: string, sort: { item: string } }, {rejectWithValue}) => {
        try {
            const sortData = sort && sort.item

            return await newsServiceInstance.fetchNews({page, values, FDate, sortData});
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


export const articles: any = createSlice({
    name: "articles",
    initialState: {
        newsData: null,
        searchValue: null,
        page: 0,
        total: null,
        isFetching: false,
        dateTime: null,
        error: null,
    } as any,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setDateTime(state, action) {
            state.dateTime = action.payload
        },
    },
    extraReducers: {
        [fetchArticles.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.error = null
            if(action.payload.data.totalResults === 0){
                state.error = 'Not found any information'
            }
            state.newsData = action.payload.data.articles;
            state.total = action.payload.data.totalResults
            state.isFetching = false;
        },
        [fetchArticles.rejected]: (state, action) => {
            const {response} = action.payload
            const error = response.data.message
            state.error = error
            state.isFetching = false;
        },
    },
});
export default articles.reducer;
export let {setSearchValue, setDateTime} = articles.actions
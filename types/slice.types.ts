export interface FetchDataTypes {
    page: number;
    values?: string;
    FDate?: string;
    sort: { item: string };
}
    export interface ArticleInitialStateTypes {
    newsData:object[]| null ,
    searchValue: string | null,
    page: number,
    total: number | null,
    isFetching: boolean ,
    dateTime: string | null,
    error: string | null,
}
import axios from "axios";

export const USERS_PAGE_SIZE = 10;

class ServiceNews {
  fetchNews({
    page,
    values,
    FDate,
    sortData,
  }: {
    page: number;
    values?: any;
    FDate?: string;
    sortData?: string;
  }) {
    return axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: values || "bitcoin",
        pageSize: USERS_PAGE_SIZE,
        page: page,
        sortBy: sortData || "relevancy",
        from: FDate,
        to: FDate,
        apiKey: "a7174304185246c2b20b8bfcf3f6a3e9",
      },
    });
  }
}

const newsServiceInstance = new ServiceNews();
export default newsServiceInstance;

import axios from "axios";

export const USERS_PAGE_SIZE = 10;
import config from '../config';

let {API_KEY} = config


class ServiceNews {
    BASE_URL = `https://newsapi.org/v2/everything`

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
        return axios.get(this.BASE_URL, {
            params: {
                q: values || "bitcoin",
                pageSize: USERS_PAGE_SIZE,
                page: page,
                sortBy: sortData || "relevancy",
                from: FDate,
                to: FDate,
                apiKey: API_KEY,
            },
        });
    }
}

const newsServiceInstance = new ServiceNews();
export default newsServiceInstance;

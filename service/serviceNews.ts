import axios from "axios";

export const USERS_PAGE_SIZE = 10;

class ServiceNews {

    fetchNews({page, values, FDate}: { page: number, values?: any, FDate?: string}) {

        return axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: values || "bitcoin",
                pageSize: USERS_PAGE_SIZE,
                page: page,
                from: FDate,
                to: FDate,
                apiKey: "f0595296a1284c469a334e3eecd6cc28"

            }
        });
    }

}

const newsServiceInstance = new ServiceNews();
export default newsServiceInstance;
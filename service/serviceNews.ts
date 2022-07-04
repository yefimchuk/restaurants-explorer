import axios from "axios";

export const USERS_PAGE_SIZE = 10;

class ServiceNews {

    fetchNews({page, values}: { page: number, values?: any }) {
        return axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: values || "bitcoin",
                pageSize: USERS_PAGE_SIZE,
                page: page,
                apiKey: "f0595296a1284c469a334e3eecd6cc28"

            }
        });
    }

}

const newsServiceInstance = new ServiceNews();
export default newsServiceInstance;
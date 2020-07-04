import { apiUrl } from "../constants";
import API from "./api";

export const fetchCounterItemsApi = () => {
    return {
        url: `${apiUrl}/api/counter`,
        opt: API.requestOptions("GET")
    };
}

export default {
    fetchCounterItemsApi
};
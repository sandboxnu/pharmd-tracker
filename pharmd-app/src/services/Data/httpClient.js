// Add authorization token to each request
import {fetchUtils} from "react-admin";

/**
 * Wrapper for React Admin HTTP JSON fetcher, adding headers and token to each request
 * @param {string} url the url to make a request to
 * @param {Object?} options Optionally contains headers for this request
 * @return {Promise}
 */
export default (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    const token = localStorage.getItem("token");
    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

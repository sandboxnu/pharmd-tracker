// React Admin hooks that will makes calls to the API to GET content
import { stringify } from "query-string";
import {fetchUtils} from "react-admin";



/**
 * Returns object with hooks for getting resources
 * @param {Function} httpClient The function to make an HTTP request
 * @param {string} BACKEND_URL the base URL to make a request to
 * @return {{getList: (function(*, *=): *), getMany: (function(*, *): *), getManyReference: (function(*, *): *), getOne: (function(*, *): *)}}
 */
export default (httpClient, BACKEND_URL) => ({
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        console.log("PARAMS", params);
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage
        };
        const url = `${BACKEND_URL}/${resource}?${stringify(query)}`;
        console.log("URL", url);
        return httpClient(url).then(({ headers, json, status }) => {
            console.log(json)
            console.log("HAS AUTH", status);
            if (!headers.has("x-total-count")) {
                return Promise.reject("The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?")
            }
            return {
                data: json,
                total: parseInt(
                    headers
                        .get("x-total-count")
                        .split("/")
                        .pop(),
                    10
                )
            };
        });
    },

    getOne: (resource, params) =>
        httpClient(`${BACKEND_URL}/${resource}/${params.id}`).then(({ json }) => ({
            data: json
        })),

    getMany: (resource, params) => {
        const query = {
            id: params.ids
        };
        const url = `${BACKEND_URL}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            [params.target]: params.id,
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage
        };
        const url = `${BACKEND_URL}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => {
            if (!headers.has("x-total-count")) {
                return Promise.reject("The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?")
            }
            return {
                data: json,
                total: parseInt(
                    headers
                        .get("x-total-count")
                        .split("/")
                        .pop(),
                    10
                )
            };
        });
    },
    getNotes: (resource, params) => {
        return httpClient(`${BACKEND_URL}/${resource}/${params.id}/notes`).then(({ json }) => ({
            data: json
        }))
    }
})

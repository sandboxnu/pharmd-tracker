// React Admin hooks that will makes calls to the API to CREATE content

/**
 * Returns object with hooks for creating resources
 * @param {Function} httpClient The function to make an HTTP request
 * @param {string} BACKEND_URL the base URL to make a request to
 * @return {{create: (function(*, *): *)}}
 */
export default (httpClient, BACKEND_URL) => ({
    create: (resource, params) =>
        httpClient(`${BACKEND_URL}/${resource}`, {
            method: "POST",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id }
        })),
})

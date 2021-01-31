// React Admin hooks that will makes calls to the API to DELETE content

/**
 * Returns object with hooks for deleting resources
 * @param {Function} httpClient The function to make an HTTP request
 * @param {string} BACKEND_URL the base URL to make a request to
 * @return {{deleteMany: (function(*, *): Promise<{data: *}>), delete: (function(*, *): *)}}
 */
export default (httpClient, BACKEND_URL) => ({
    delete: (resource, params) =>
        httpClient(`${BACKEND_URL}/${resource}/${params.id}`, {
            method: "DELETE"
        }).then(({ json }) => ({ data: json })),

    // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    deleteMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${BACKEND_URL}/${resource}/${id}`, {
                    method: "DELETE"
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => json.id) }))
})

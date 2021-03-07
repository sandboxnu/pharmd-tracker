// React Admin hooks that will makes calls to the API to UPDATE content

/**
 * Returns object with hooks for updating resources
 * @param {Function} httpClient The function to make an HTTP request
 * @param {string} BACKEND_URL the base URL to make a request to
 * @return {{updateMany: (function(*, *): Promise<{data: *}>), update: (function(*, *): *)}}
 */
export default (httpClient, BACKEND_URL) => ({
  update: (resource, params) =>
    httpClient(`${BACKEND_URL}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json })),

  // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        httpClient(`${BACKEND_URL}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data)
        })
      )
    ).then(responses => ({ data: responses.map(({ json }) => json.id) }))
});

// React Admin hooks that will makes calls to the API to EDIT content

// NOTE: this may be added for compatibility with fake API--edit hook does not exist in React Admin

/**
 * Returns object with hooks for editing resources
 * @param {Function} httpClient The function to make an HTTP request
 * @param {string} BACKEND_URL the base URL to make a request to
 * @return {{edit: (function(*=, *=): *)}}
 */
export default (httpClient, BACKEND_URL) => ({
  edit: (resource, params) => {
    return httpClient(`${BACKEND_URL}/${resource}`, {
      method: "PUT",
      body: JSON.stringify(params.data)
    }).then(({ json }) => {
      return {
        data: { ...params.data, id: json.id }
      };
    });
  }
});

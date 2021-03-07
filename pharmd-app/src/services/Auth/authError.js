/**
 * Each time the API returns an error, react-admin calls the authProvider.checkError() method.
 * It’s up to this function to decide which HTTP status codes should let the user continue (by returning a resolved promise)
 * or log them out (by returning a rejected promise).
 * If the API requires authentication, and the user credentials are missing in the request or invalid,
 * the API usually answers with an HTTP error code 401 or 403.
 * @param {number} status
 * @return {Promise<never>|Promise<void>}
 */
export default ({ status }) => {
  if (status === 401 || status === 403) {
    localStorage.removeItem("token");
    return Promise.reject();
  }
  return Promise.resolve();
};

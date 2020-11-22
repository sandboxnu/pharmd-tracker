// For checking credentials during navigation

/**
 * The place to validate the user's credentials
 * Redirecting to the login page whenever the REST response is 401 is usually not enough, so something else
 * should be done here to avoid using stale data
 * @return {Promise<never>|Promise<void>}
 */
export default () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
}

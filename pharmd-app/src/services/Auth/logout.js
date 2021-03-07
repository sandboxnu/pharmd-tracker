/**
 * Called when the user clicks the Logout button given by React Admin
 * Used often to remove potentially sensitive data from Redux store
 * Immediately redirects user to login page
 * Responsible for cleaning up authentication data, like tokens stored in local storage
 * @return {Promise<void>}
 */
export default () => {
  localStorage.removeItem("token");
  localStorage.removeItem("permissions");
  localStorage.removeItem("userInfo");
  return Promise.resolve();
};

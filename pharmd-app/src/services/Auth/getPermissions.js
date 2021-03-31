/**
 * Calls this method to check user permissions
 * Useful for enabling or disabling features on a per user basis
 * Called when user redirects
 * More info here: https://marmelab.com/react-admin/Authorization.html
 * @return {Promise<never>|Promise<void>}
 */
export default () => {
  const role = localStorage.getItem("permissions");
  return role ? Promise.resolve(role) : Promise.reject();
};

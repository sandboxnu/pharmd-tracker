import login from "./login";
import logout from "./logout";
import authError from "./authError";
import isAuth from "./isAuth";
import getPermissions from "./getPermissions";

/**
 * Main source of authentication logic for the app
 * Object keys are hooks to execute authentication code
 * Provided to the <Admin> components authProvider prop to connect to these hooks
 */
export default {
  login,
  logout,
  checkError: authError,
  checkAuth: isAuth,
  getPermissions
};

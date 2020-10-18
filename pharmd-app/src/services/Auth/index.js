import login from './login'
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
    // called when the user attempts to log in
    login: login,
    // called when the user clicks on the logout button
    logout: logout,
    // called when the API returns an error
    checkError: authError,
    // called when the user navigates to a new location, to check for authentication
    checkAuth: isAuth,
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: getPermissions
};

import decodeJwt from "jwt-decode";
import  {AUTH_URL } from "./config/backendRoutes";

export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request(AUTH_URL, {
      method: "POST",
      body: JSON.stringify({ email: username, password: password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          return Promise.reject(response.statusText)
        }
        return response.json();
      })
      .then(({ accessToken }) => {
        const decodedToken = decodeJwt(accessToken);
        console.log("Login info ", decodedToken);
        localStorage.setItem("token", accessToken);
        localStorage.setItem("userInfo", JSON.stringify({
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          userID: decodedToken.userID
        }));
        localStorage.setItem(
            "permissions",
            decodedToken.isAdmin ? "admin" : "user"
        );
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("userInfo");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  }
};

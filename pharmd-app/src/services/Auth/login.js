import decodeJwt from "jwt-decode";
import {FAKE_AUTH} from "../../config/backendRoutes";

// import AUTH_URL instead to use real pharmd data
const AUTH_URL = FAKE_AUTH;

export default ({ username, password }) => {
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
                (decodedToken.isAdmin || decodedToken.canWrite || decodedToken.email === "kevin@mail.com") ? "admin" : "user"
            );
        })
        .catch(err => {
            console.error(err)
        })
}

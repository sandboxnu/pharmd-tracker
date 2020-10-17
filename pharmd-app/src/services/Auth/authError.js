export default ({ status }) => {
    if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        return Promise.reject();
    }
    return Promise.resolve();
}

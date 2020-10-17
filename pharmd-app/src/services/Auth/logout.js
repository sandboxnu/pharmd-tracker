export default () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("userInfo");
    return Promise.resolve();
}

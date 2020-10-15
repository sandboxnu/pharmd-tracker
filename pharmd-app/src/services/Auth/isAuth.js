export default () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
}

const setToken = (token: string) => localStorage.setItem("token", token);
const getToken = () => localStorage.getItem("token");
const removeToken = () => localStorage.removeItem("token");
export { setToken, getToken, removeToken };

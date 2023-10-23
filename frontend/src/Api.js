import axios from "axios";

const api = axios.create({
    baseURL: "https://6531c22a4d4c2e3f333d44b4.mockapi.io/Editores/Editores",
});

export default api;
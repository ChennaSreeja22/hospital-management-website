import axios from "axios";

const api = axios.create({
    baseURL: "https://hospital-backend-gz8q.onrender.com/api",
});

export default api;
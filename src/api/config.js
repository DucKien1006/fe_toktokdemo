import axios from "axios";

const urlApi = {
    localUrl: "https://localhost:8080/api/v1",
};

/**
 * Khởi tạo đối tượng axios
 */
const axiosAPI = axios.create({
    baseURL: urlApi.localUrl
});

/**
 * Custom request
 */
axiosAPI.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

/**
 * Custom dữ liệu trả về
 */
axiosAPI.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosAPI;

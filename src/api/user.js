import axiosAPI from "@/api/config";
/**
 * Đăng nhập
 * @param {*} userCredential  gồm userName và password
 * @returns token
 */
const loginUsers = (userCredential) => {
    return axiosAPI.post(`/Users/Login`, userCredential);
};

/**
 * Đăng ký
 */

const registerUsers = (userRegister) => {
    return axiosAPI.post(`/Users/Register`, userRegister);
};

/**
 * Lấy danh sách người dùng
 * @returns danh sách người dùng
 */
const getUsers = () => {
    return axiosAPI.get("/Users");
};

export {
    getUsers,
    loginUsers,
    registerUsers,
}
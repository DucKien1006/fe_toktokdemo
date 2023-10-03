import axiosAPI from "@/api/config";

/**
 * Lấy danh sách người dùng
 * @returns danh sách người dùng
 */
const getUsers = () => {
    return axiosAPI.get("/Users");
};

export {
    getUsers,

}
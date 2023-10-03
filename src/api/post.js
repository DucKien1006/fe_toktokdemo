import axiosAPI from "@/api/config";

/**
 * Lấy danh sách bài đăng
 * @returns danh sách bài đăng
 */
const getPosts = () => {
    return axiosAPI.get("/Posts");
};
/**
 * Lấy bài đăng theo id
 * @returns 1 bài đăng
 */
const getPostById = (postId) => {
    return axiosAPI.get(`/Posts/${postId}`);
};
/**
 * Thêm bài đăng
 */
const addPost = (post) => {
    return axiosAPI.post('/Posts', post);
};
/**
 * Sửa bài đăng
 */
const updatePost = (post) => {
    return axiosAPI.post(`/Posts/${post.PostId}`, post);
};
/**
 * Xóa bài đăng
 */
const deletePost = (postId) => {
    return axiosAPI.delete(`/Posts/${postId}`);
};
/**
 * phân trang, tìm kiếm
 * @returns danh sách bài đăng
 */
const pagingPost = (pageSize, pageNumber, keyword) => {
    return axiosAPI.get(`/Posts/Filter?pageSize=${pageSize}&pageNumber=${pageNumber}&keyword=${keyword}`);
};

export {
    getPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost,
    pagingPost,
}
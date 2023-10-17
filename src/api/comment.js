import axiosAPI from "@/api/config";

//thêm 
const addComment = (addCommentDetail) => {
    return axiosAPI.post('/Comment', addCommentDetail);
}
//sửa
const updateCommnent = (updateCommnentDetail) => {
    return axiosAPI.post(`/Comment/${updateCommnentDetail.commentId}`, updateCommnentDetail);
} 

//xóa
const deleteComment = (commentId) => {
    return axiosAPI.delete(`/Comment/${commentId}`)
}

export default {
    addComment,
    updateCommnent,
    deleteComment,
}
import axiosAPI from "@/api/config";

//thêm 
const addLike = (addLikeDetail) => {
    return axiosAPI.post('/Like', addLikeDetail);
}
//xóa
const deleteLike = (likeId) => {
    return axiosAPI.delete(`/Like/${likeId}`)
}

export default {
    addLike,
    deleteLike,
}
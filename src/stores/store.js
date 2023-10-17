// import Vue from 'vue';
import Vuex from "vuex";
// Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Các trạng thái của ứng dụng

    stateUserId: "",
    stateUserName: "",
    stateUserPassword: "",
    stateLogin: false,
    stateTokenAccess: "",
  },
  getters: {
    // Các getters được sử dụng để lấy giá trị của các trạng thái
    stateUserId: state => state.stateUserId,
    stateUserName: (state) => state.stateUserName,
    stateUserPassword: (state) => state.stateUserPassword,
    stateLogin: state => state.stateLogin,
    stateTokenAccess: (state) => state.stateTokenAccess,
  },
  mutations: {
    // Các mutations được sử dụng để thay đổi trạng thái
    setUserId(state, userId) {
      state.stateUserId = userId;
    },
    setUserName(state, userName) {
      state.stateUserName = userName;
    },
    setUserPassword(state, userPassword) {
      state.stateUserPassword = userPassword;
    },
    setLogin(state, isLogin) {
      state.stateLogin = isLogin;
    },
    setToken(state, token) {
      state.stateTokenAccess = token;
    },
  },
  actions: {
    // Các actions được sử dụng để thực hiện các tác vụ
    setUserIdAction({ commit }, userId) {
      commit("setUserId", userId);
    },
    setLoginAction({ commit }, isLogin) {
      commit("setLogin", isLogin);
    },
  },
});

export default store;

// import Vue from 'vue';
import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    // Các trạng thái của ứng dụng

    //
    stateUserId:'',
    stateUserName: '',
    stateUserPassword: '',

  },
  mutations: {
    // Các mutations được sử dụng để thay đổi trạng thái

    //
    setUserId(state, userId){
      state.stateUserId = userId
    },
    setUserName(state, userName){
      state.stateUserName = userName
    },
    setUserPassword(state, userPassword){
      state.stateUserPassword = userPassword
    },

  },
  actions: {
    // Các actions được sử dụng để thực hiện các tác vụ

    
  }
});
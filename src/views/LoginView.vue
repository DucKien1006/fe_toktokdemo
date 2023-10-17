<template>
    <BaseOverlay>
        <div class="login-view">
            <div class="login-form">
                <div class="login-form-header">
                    <h1>Đăng nhập</h1>
                    <BaseIcon iconClass="close-icon" @click="closeLoginForm"></BaseIcon>
                </div>
                <input type="username" v-model="username" placeholder="Tên đăng nhập">
                <input type="password" v-model="password" placeholder="Mật khẩu">
                <div class="login-button">
                    <button @click="login">Đăng nhập</button>
                    <button @click="goToRegister">Đăng ký</button>
                </div>
            </div>
            <div class="login-error" v-if="error">
                <p>{{ error }}</p>
            </div>
        </div>
    </BaseOverlay>
</template>
  
<script>
import { loginUsers } from '@/api/user';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import BaseOverlay from '@/components/base/BaseOverlay.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
// import store from '@/stores/store.js';
// import router from '@/routers/index.js';
export default {
    name: "LoginView",
    components: {
        BaseOverlay,
        BaseIcon,
    },
    data() {
        return {
            username: "",
            password: "",
            error: "",
            result: {},
        };
    },
    computed: {
        // stateLogin() {
        //     return this.$store.getters.stateLogin;
        // },
        ...mapGetters(["stateUserName", "stateUserPassword",
            "stateLogin", "stateTokenAccess"]),

    },
    methods: {
        ...mapMutations(["setUserName", "setUserPassword",
            "setLogin", "setToken"]),
        ...mapActions(['setLoginAction']),
        async login() {
            var userCredential = {
                userName: this.username,
                password: this.password
            };
            // console.log(userCredential);
            // Gọi API đăng nhập
            this.result = await loginUsers(userCredential);
            console.log(this.result);
            // Nếu đăng nhập thành công
            if (this.result.isSucceed == true) {
                this.setLogin(true);
                this.setToken(this.result.accessToken);
                this.setUserName(this.username);
                this.setUserPassword(this.password);
                this.setUserId(this.result.Id);
                this.closeLoginForm();
            } else {
                // Lưu lỗi
                this.error = this.result.message;
            }
        },
        // goToRegister() {
        //     this.$router.push({ path: '/register' });
        // },
        // goToForYouView() {
        //     this.$router.push({ path: '/forYouView' });
        // },
        closeLoginForm() {
            this.$emit("closeLoginForm");
        },
    }
};
</script>

<style scoped>
.login-view {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    z-index: 3;
}

.login-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.login-form-header {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.login-form-header .close-icon {
    position: absolute;
    right: 20px;
    /* top: 20px; */
}

.login-form h1 {
    font-size: 20px;
    margin-bottom: 10px;
}

.login-form input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.login-button {
    display: flex;
    justify-content: space-around;
}

.login-form button {
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.login-error {
    margin-top: 20px;
    color: #ff0000;
}
</style>
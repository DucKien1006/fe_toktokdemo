<template>
    <BaseOverlay>
        <div class="register-view">
            <div class="register-form">
                <div class="register-form-header">
                    <h1>Đăng ký</h1>
                    <BaseIcon iconClass="close-icon" @click="closeRegisterForm"></BaseIcon>
                </div>
                <input type="text" v-model="firstName" placeholder="Tên">
                <input type="text" v-model="lastName" placeholder="Họ">
                <input type="text" v-model="username" placeholder="Tên người dùng">
                <input type="password" v-model="password" placeholder="Mật khẩu">
                <input type="email" v-model="email" placeholder="Email">
                <!-- <input type="tel" v-model="phone" placeholder="Số điện thoại"> -->
                <!-- <input type="text" v-model="address" placeholder="Địa chỉ"> -->
                <select v-model="gender">
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                </select>
                <select v-model="role">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <!-- <input type="date" v-model="dob" placeholder="Ngày sinh"> -->
                <button @click="register">Đăng ký</button>
            </div>
            <div class="register-error" v-if="error">
                <p>{{ error }}</p>
            </div>
        </div>
    </BaseOverlay>
</template>
  
<script>
import BaseOverlay from '@/components/base/BaseOverlay.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { registerUsers } from '@/api/user.js';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: "RegisterView",
    components: {
        BaseOverlay,
        BaseIcon,
    },
    computed: {
        ...mapGetters(["stateUserId", "stateUserName", "stateUserPassword",
            "stateLogin", "stateTokenAccess"]),
        
    },
    data() {
        return {
            username: "",
            password: "",
            email: "",
            phone: "",
            address: "",
            gender: "Nam",
            dob: "",
            role: "",
        };
    },
    methods: {
        ...mapMutations(["setUserId", "setUserName", "setUserPassword",
            "setLogin", "setToken"]),
        async register() {
            var registerUser = {
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                role: this.role
            };

            // Gọi API đăng ký
            var result = await registerUsers(registerUser);
            console.log(result);

            // Nếu đăng ký thành công
            if (result.isSucceed == true) {
                //
                this.setLogin(true);
                this.setToken(this.result.accessToken);
                this.setUserName(this.username);
                this.setUserPassword(this.password);
                // Chuyển hướng đến trang chủ(đóng register form)
                this.closeRegisterForm();
            } else {
                // Lưu lỗi
                this.error = result.message;
            }
        },
        closeRegisterForm() {
            this.$emit("closeRegisterForm");
        },
    }
};
</script>
  
<style>
.register-view {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    z-index: 3;
}

.register-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.register-form-header {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
}

.register-form-header .close-icon {
    position: absolute;
    right: 20px;
    /* top: 20px; */
}

.register-form h1 {
    font-size: 20px;
    margin-bottom: 10px;
}

.register-form input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.register-form select {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.register-form button {
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.register-error {
    margin-top: 20px;
    color: #ff0000;
}
</style>
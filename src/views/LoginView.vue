<template>
    <div class="login-view">
        <div class="login-form">
            <h1>Đăng nhập</h1>
            <input type="email" v-model="email" placeholder="Email">
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
</template>
  
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        login() {
            // Gọi API đăng nhập
            // ...

            // Nếu đăng nhập thành công
            // if (true) {
            //     // Chuyển hướng đến trang chủ
            //     // ...
            // } else {
            //     // Lưu lỗi
            //     this.error = "Tài khoản hoặc mật khẩu không chính xác";
            // }
        },
        goToRegister(){
            this.$router.push({ path: '/register' });
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
}

.login-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
.login-button{
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
<template>
    <div class="register-view">
        <div class="register-form">
            <h1>Đăng ký</h1>
            <input type="text" v-model="username" placeholder="Tên người dùng">
            <input type="password" v-model="password" placeholder="Mật khẩu">
            <input type="email" v-model="email" placeholder="Email">
            <input type="tel" v-model="phone" placeholder="Số điện thoại">
            <input type="text" v-model="address" placeholder="Địa chỉ">
            <select v-model="gender">
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
            </select>
            <input type="date" v-model="dob" placeholder="Ngày sinh">
            <button @click="register">Đăng ký</button>
        </div>
        <div class="register-error" v-if="error">
            <p>{{ error }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            email: "",
            phone: "",
            address: "",
            gender: "Nam",
            dob: ""
        };
    },
    methods: {
        register() {
            // Gọi API đăng ký
            // ...

            // Nếu đăng ký thành công
            // if (true) {
            //   // Chuyển hướng đến trang chủ
            //   // ...
            // } else {
            //   // Lưu lỗi
            //   this.error = "Tài khoản hoặc mật khẩu không chính xác";
            // }
        }
    }
};
</script>
  
<style>
.register-view {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
}

.register-form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
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
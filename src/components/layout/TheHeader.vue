<!-- eslint-disable no-undef -->
<template>
    <header>
        <div class="left">
            <img src="@/assets/image/tik-tok.png" alt="TikTok" />
            <h1>TikTok</h1>
        </div>
        <div class="center">
            <input type="text" placeholder="Tìm kiếm" class="search-input" />
            <img src="@/assets/icon/search.png" alt="" />
        </div>
        <div class="right">
            <div class="upload-button" @click="openAddPopup">
                <BaseIcon iconClass="plus-icon"></BaseIcon>
                <div id="upload-text">Upload</div>
            </div>
            <div class="option-button" @click="openOptionMenu">
                <BaseIcon iconClass="option-icon"></BaseIcon>
                <ul v-if="stateOptionMenu">
                    <li @click="openLoginView">Đăng nhập</li>
                    <li @click="openRegisterView">Đăng ký</li>
                    <li v-show="isLogin" @click="logOut">Đăng xuất</li>
                </ul>
            </div>
            <div class="headerSession" v-if="isLogin">
                <div class="user-avatar">
                    <img src="@/assets/image/user.png" alt="Avatar" />
                </div>
                <div class="username">{{ stateUserName }}</div>
            </div>

        </div>
    </header>
    <teleport to='body'>
        <AddPopup v-if="stateAddPopup" @closePopupAdd="closePopupAdd"></AddPopup>
    </teleport>

    <teleport to="body">
        <LoginView v-if="stateLoginView" @closeLoginForm="closeLoginView"></LoginView>
    </teleport>
    <teleport to="body">
        <RegisterView v-if="stateRegisterView" @closeRegisterForm="closeRegisterForm"></RegisterView>
    </teleport>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue';
import AddPopup from '@/views/AddPopup.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "TheHeader",
    components: {
        BaseIcon,
        AddPopup,
        LoginView,
        RegisterView,
    },
    computed: {
        ...mapGetters(['stateLogin', 'stateUserName']),
        
    },
    data() {
        return {
            stateAddPopup: false,
            stateOptionMenu: false,
            stateLoginView: false,
            stateRegisterView: false,
            // username: this.stateUserName,
        };
    },
    methods: {
        ...mapMutations(["setLogin"]),
        openAddPopup() {
            this.stateAddPopup = true;
        },
        closePopupAdd() {
            this.stateAddPopup = false;
        },
        openOptionMenu() {
            // this.stateOptionMenu = true;
            this.stateOptionMenu = !this.stateOptionMenu;
        },
        openLoginView() {
            this.stateLoginView = true;
        },
        closeLoginView() {
            this.stateLoginView = false;
        },
        openRegisterView() {
            this.stateRegisterView = true;
         },
        closeRegisterForm(){
            this.stateRegisterView = false;
        },
        logOut() { },
    },

};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #ffffff;
    width: 100%;
}

.left {
    width: 20%;
    display: flex;
    gap: 8px;
    padding-left: 24px;
}

.center {
    width: 40%;
    display: flex;
    align-items: center;
    justify-self: center;

    min-width: 200px;
    border: 1px solid #c2c2c2;
    border-radius: 24px;
    height: 46px;
}

.center input {
    height: 36px;
    width: 90%;
    height: 24px;
    margin-left: 12px;
    border: unset;
}

.center img {
    width: 30px;
    height: 30px;
    margin-right: 12px;
}

.right {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right .upload-button {
    display: flex;
    flex-direction: row;
    border: 2px solid #686868;
    height: 36px;
    min-height: 36px;
    min-width: 110px;
    border: 1px solid rgba(22, 24, 35, 0.12);
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    cursor: pointer;
    font-size: 16;
    font-weight: 700;
}

.right .upload-button icon {
    margin-right: 8px;
}

/* .right .upload-button #upload-text {
    border: unset;
    background-color: #fff;
    height: 36px;
    font-size: 16px;
    font-weight: 500;
} */

.right .option-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.right .option-button ul {
    position: relative;
    top: 44px;
    right: 20px;
    border: 1px solid #e2e1e1;
    width: 80px;
}

.right .option-button li {
    height: 32px;
    line-height: 32px;
    min-height: 32px;
    /* background-color: #eed5c0; */
    text-align: center;
}

.right .option-button li:hover {
    background-color: #58d3eb;

}

.user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 12px;

}

.username {
    font-size: 18px;
    font-weight: 600;
}
</style>

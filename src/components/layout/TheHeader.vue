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
            <div class="user-avatar">
                <img src="@/assets/image/user.png" alt="Avatar" />
            </div>
            <div class="username">Đức Kiên</div>
        </div>
    </header>
    <teleport to='body'>
        <AddPopup v-if="stateAddPopup" @closePopupAdd="closePopupAdd"></AddPopup>
    </teleport>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue';
import AddPopup from '@/views/AddPopup.vue';
export default {
    name: "TheHeader",
    components: {
        BaseIcon,
        AddPopup
    },
    data() {
        return {
            stateAddPopup: true,
        };
    },
    methods:{
        openAddPopup(){
            // alert("click on Upload btn");
            this.stateAddPopup = true;
        },
        closePopupAdd(){
            this.stateAddPopup = false;
        },

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

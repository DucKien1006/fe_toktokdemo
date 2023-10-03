<template>
    <div class="main_page">
        <TheHeader></TheHeader>
        <div class="content-container">
            <TheSidebar></TheSidebar>
            <TheBody></TheBody>
        </div>
    </div>
    <!-- <LoginView></LoginView> -->
    <!-- <RegisterView></RegisterView> -->

</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheBody from '@/components/layout/TheBody.vue';
import TheSidebar from '@/components/layout/TheSidebar.vue';
// import RegisterView from '@/views/RegisterView.vue';
// import LoginView from '@/views/LoginView.vue';
export default {
    name: "ThePage",
    components:{
    TheHeader,
    TheBody,
    TheSidebar,
    // RegisterView,
    // LoginView
}
};

</script>

<style scoped>
.main_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content-container{
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>
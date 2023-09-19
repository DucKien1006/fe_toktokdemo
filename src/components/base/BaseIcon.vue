<template>
    <div class="b-icon" :class="iconClass">
    
    </div>
</template>

<script>
export default {
    name: "BaseIcon",
    props:{
        iconClass: {
            typeof: String
        }
    }

}
</script>

<style scoped>
@import url("@/assets/css/icon.css"); 
.b-icon{
    width: 20px;
    height: 20px;

}
</style>
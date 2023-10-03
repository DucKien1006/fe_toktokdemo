<template>
  <BaseOverlay>
    <div class="tiktok-create-post">
      <div class="tiktok-video-upload">
        <h1>Tải video</h1>
        <BaseIcon iconClass="close-icon" @click="closePopupAdd"></BaseIcon>
      </div>
      <input type="file" accept="video/*" @change="onVideoChange">
      <div class="tiktok-caption">
        <h1>Caption</h1>
        <input type="text" v-model="caption">
      </div>
      <div class="tiktok-submit">
        <button @click="submit">Đăng</button>
      </div>
    </div>

  </BaseOverlay>
</template>
  
<script>
import BaseOverlay from '@/components/base/BaseOverlay.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: "AddPopup",
  components: {
    BaseOverlay,
    BaseIcon,

  },
  data() {
    return {
      video: null,
      caption: ""
    };
  },
  methods: {
    onVideoChange(event) {
      this.video = event.target.files[0];
    },
    submit() {
      // Gọi API đăng bài
      // ...
    },
    closePopupAdd() {
      this.$emit("closePopupAdd")
    },
  }
};
</script>
  
<style>
.tiktok-create-post {
  width: 400px;
  /* margin: 25%vh auto; */
  padding: 20px;
  background-color: #fff;
  z-index: 3;

}

.tiktok-video-upload {
  margin-bottom: 20px;
  display: flex;
  position: relative;
}

.tiktok-video-upload h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.tiktok-video-upload input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.tiktok-video-upload .close-icon{
  position: absolute;
  right: 20px;
  /* top: 20px; */
}
.tiktok-caption {
  margin-bottom: 20px;
}

.tiktok-caption h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.tiktok-caption input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.tiktok-submit {
  margin-top: 20px;
}

.tiktok-submit button {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
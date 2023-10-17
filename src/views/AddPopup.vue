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
        <button @click="submitPost">Đăng</button>
      </div>
    </div>

  </BaseOverlay>
  <Teleport :to="body">
    <DialogNotification v-show="showDialogNotification" @closeDialogNotification="() => (showDialogNotification = false)"
      :type="typeDialog" :message="messageDialogNotifi"></DialogNotification>
  </Teleport>
</template>
  
<script>
import BaseOverlay from '@/components/base/BaseOverlay.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { addPost } from '@/api/post'
import DialogNotification from '@/components/base/DialogNotification.vue'
export default {
  name: "AddPopup",
  components: {
    BaseOverlay,
    BaseIcon,
    DialogNotification,

  },
  computed: {
    ...mapGetters(['stateLogin', 'stateUserName', 'stateUserId']),

  },
  data() {
    return {
      video: null,
      caption: "",
      showDialogNotification: false,
      messageDialogNotifi:"",
      
    };
  },
  methods: {
    ...mapMutations(["setUserName", "setUserPassword",
      "setLogin", "setToken"]),
    ...mapActions(['setLoginAction']),
    onVideoChange(event) {
      this.video = event.target.files[0];
    },
    validatePost() {
      if (this.caption == null) {
        //hiện dialog lỗi
      }
      //kiểm tra xem có file từ input file không

    },
    async submitPost() {
      //đầu tiên check đăng nhập
      //nếu chưa đăng nhập thì hiện dialog bắt đăng nhập
      if (this.stateLogin == false) {
        alert("Bạn cần phải đăng nhập để thực hiện hành động này!")
      }
      else //đã đăng nhập rồi thì hiện popup add
      {
        //validate post
        this.validatePost();
        var newPost = {
          PostContent: this.caption,
          UserId: this.stateUserId,
          file: this.video
        };
        // Gọi API đăng bài
        var result = await addPost(newPost);
        if (result == 1) { //thành công
          //ẩn popup add
          this.closePopupAdd();
          //hiện thông báo thành công


          //load lại data(emit ra ngoài)


        } else {//lỗi
          //hiện dialog báo lỗi

        }
      }


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

.tiktok-video-upload .close-icon {
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
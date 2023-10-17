<template>
  <div class="body-container">


    <div class="post_item" v-for="(item, index) in listPosts" :key="index">
      <div class="post_item-left">
        <div class="author">
          <!-- <img src="https://avatars.githubusercontent.com/u/1234567890?v=4" alt="Avatar"> -->
          <div class="author_name" >Tên tác giả</div>
        </div>
        <div class="time">
          <span>12h trước</span>
        </div>
        <div class="caption">
          <p>Caption</p>
        </div>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/AyziJnIR_1w?si=-IKBifd-QU39NbUi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
        <video id="my-video" controls>
          <source src="C:\Users\ducki\Videos\TikTok\videotest1" type="application/x-mpegURL">
        </video>

      </div>
      <div class="post_item-right">
        <BaseIcon iconClass="heart_black-icon" @click="onClickLike"></BaseIcon>
        <BaseIcon iconClass="comment-icon" @click="onClickComment"></BaseIcon>
      </div>
    </div>
    <!-- <div class="post_item">
      <div class="post_item-left">
        <div class="author">
          <div class="author_name">Tên tác giả</div>
        </div>
        <div class="time">
          <span>12h trước</span>
        </div>
        <div class="caption">
          <p>Caption</p>
        </div>
        <video class="post_video" controls>
          <source src="https://youtu.be/yYAgBRO-aT8?si=YnYpJSIyf8FkRXcm" type="video/mp4">
          <source src="https://www.tiktok.com/@quynhbei/video/7278614820143025410?is_from_webapp=1&sender_device=pc"
            type="video/mp4">

        </video>
      </div> 
    <div class="post_item-right">
      <BaseIcon iconClass="heart_black-icon"></BaseIcon>
      <BaseIcon iconClass="comment-icon"></BaseIcon>
    </div>
  </div>-->
    <div class="body_footer">
      <BaseIcon iconClass="arrow_up_black-icon"></BaseIcon>
      <BaseIcon iconClass="arrow_down_black-icon"></BaseIcon>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { addLike, deleteLike } from '@/api/like';
// import { addComment, updateComment, deleteComment } from '@/api/comment'
export default {
  name: "ForYouView",
  components: {
    BaseIcon,

  },
  computed: {
    ...mapGetters(['stateLogin', 'stateUserName', 'stateUserId']),
  },
  data() {
    return {
      listPosts: [],

    }
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    async onClickLike(postId, stateLike) {
      if (stateLike) { //nếu hiện tại đã có like(tức bây giờ unlike)
        //lấy likeId ra để gọi api xóa like
        var likeId;
        await deleteLike(likeId);
      } else { //nếu hiện tại chưa like(tức bây giờ like)
        var likeDetail = {
          userId: this.stateUserId,
          postId: postId,

        }
        //gọi api thêm like

        await addLike(likeDetail);
      }

    },
    onClickComment() {

    },
  },
}
</script>

<style scoped>
.body-container {
  width: calc(100vw - var(--sidebar-width));
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* position: relative; */
}

.post_item {
  width: 600px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 100px;
}

.post_item-left {
  display: flex;
  flex-direction: column;
}

.post_item-right {
  width: 50px;
  max-width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding-left: 12px;
}

.author {
  display: flex;
  align-items: center;
}

.author img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}


.author_name {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;

}

.time {
  font-size: 14px;
}

.caption {
  font-size: 14px;
  margin-top: 10px;
}

.post_item .post_video {
  /* width: 400px;
  height: 200px; */
}

.body_footer {
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
</style>
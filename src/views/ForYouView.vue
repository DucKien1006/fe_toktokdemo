<template>
    <div class="body-container">
        <div class="post_item">
            <div class="author">
                <!-- <img src="https://avatars.githubusercontent.com/u/1234567890?v=4" alt="Avatar"> -->
                <span>Tên tác giả</span>
            </div>
            <div class="time">
                <span>12h trước</span>
            </div>
            <div class="caption">
                <p>Caption</p>
            </div>
            <video class="post_video" src="https://youtu.be/yYAgBRO-aT8?si=YnYpJSIyf8FkRXcm" controls></video>
            <div class="like_comment">
                <BaseIcon iconClass="heart_black-icon"></BaseIcon>
                <BaseIcon icon="comment-icon"></BaseIcon>
            </div>
        </div>
        <div class="body_footer">
            
        </div>
    </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue';

export default{
    name: "ForYouView",
    components:{
        BaseIcon,

    },

}
</script>

<style scoped>
.body-container {
    width: calc(100vw - var(--sidebar-width));

}
.post_item {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
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

.author span {
  margin-left: 10px;
  font-size: 16px;
}

.time {
  font-size: 14px;
}

.caption {
  font-size: 14px;
  margin-top: 10px;
}

.post_item .post_video {
  width: 300px;
  height: 120px;
}

.like_comment {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
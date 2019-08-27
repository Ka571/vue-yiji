<template>
  <div class="pinglun">
    <div class="ping-top">
      <div class="homeOne">
        <router-link :to="`${$publicUrl}/home/${post.postId}`">
          <span><</span>
        </router-link>
      </div>
      <div>评论</div>
      <div>
        <i class="iconfont iconfeiji"></i>
      </div>
    </div>
    <div class="ping-fot">
      <textarea placeholder="说点什么...." cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ping",
  computed: {
    post() {
      const { id } = this.$route.params;
      return this.$store.state.main.post.find(ele => ele.id === id);
    }
  }
};
</script>

<style >
.pinglun {
  width: 100vw;
  height: 100vh;
  padding: 0.72rem 0.52rem 0;
}
.ping-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
  border-bottom: 0.01rem solid black;
  margin-bottom: 0.49rem;
}
.ping-top > div:nth-child(2) {
  font-size: 0.5rem;
  color: #d60004;
}
.ping-top > div:last-child > i {
  font-size: 0.7rem;
  color: #d60004;
}
.ping-fot > textarea {
  width: 100%;
  height: 100vh;
  border: 0;
  font-size: 0.55rem;
}
</style>
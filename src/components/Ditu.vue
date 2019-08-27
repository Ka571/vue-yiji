<template>
  <div class="ditu">
    <div class="homen">
      <router-link :to="`${$publicUrl}/home/${post.postId}`">
        <span><</span>
      </router-link>
    </div>
    <img src="../assets/images/ditu02.jpg" alt />
  </div>
</template>

<script>
export default {
  name: "di",
  created() {},
  computed: {
    post() {
      const { id } = this.$route.params;
      return this.$store.state.main.post.find(ele => ele.id === id);
    }
  }
};
</script>

<style>
.ditu > img {
  display: block;
  width: 100%;
}
</style>
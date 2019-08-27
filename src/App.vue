<template>
  <div class="wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from "./components/Loading";
export default {
  name: "app",
  created() {
    console.log(this.$store.state);
  },

  components: {
    Loading
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  width: 100vw;
}
</style>

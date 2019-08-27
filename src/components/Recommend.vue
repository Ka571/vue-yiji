<template>
  <div class="qq">
    <div class="qq-inner">
      <i class="iconfont iconsousuo"></i>
      <div>
        <img src="../assets/images/logo_03.jpg" alt />
      </div>
    </div>
    <div class="tab">
      <ul class="box">
        <li
          :class="tapActive===index?'box-active':'box1-active'"
          v-for="(recommend,index) in recommends"
          @click="tapActive=index"
          :key="recommend.id"
        >{{recommend.title}}</li>
      </ul>
      <div
        v-for="(recommend,index) in recommends"
        v-show="tapActive===index"
        :key="recommend.id"
        class="box2"
      >
        <img v-for="pic in recommend.pics" :key="pic.id" :src="pic.src" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      tapActive: 0
    };
  },
  created() {
    console.log(this.$store.state.recommends);
  },
  computed: {
    recommends() {
      return this.$store.state.recommends.reCommends;
    }
  }
};
</script>

<style>
</style>
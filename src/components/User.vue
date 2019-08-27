<template>
  <div class="user">
    <div class="user-top">
      <img src="../assets/images/shezhi_03.jpg" alt />
    </div>
    <div class="user-banner">
      <span>艺象云集</span>
      <span>ALL></span>
    </div>
    <div class="u-banner">
      <div>
        <img src="../assets/images/banner001_04.jpg" alt />
        <span>订阅/11</span>
      </div>
      <div>
        <img src="../assets/images/banner002_06.jpg" alt />
        <span>订阅/9</span>
      </div>
      <div>
        <img src="../assets/images/banner003_07.jpg" alt />
        <span>订阅/49</span>
      </div>
    </div>
    <div class="tab">
      <ul class="box">
        <li
          :class="tapActive===index?'box-active':'box1-active'"
          v-for="(user,index) in users"
          @click="tapActive=index"
          :key="user.id"
        >{{user.title}}</li>
      </ul>
      <div
        v-for="(user,index) in users"
        v-show="tapActive===index"
        :key="user.id"
        id="use"
        class="box2 use"
      >
        <img v-for="pic in user.pics" :key="pic.id" :src="pic.src" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      tapActive: 0
    };
  },
  created() {
    console.log(this.$store.state.users);
  },
  computed: {
    users() {
      return this.$store.state.users.user;
    }
  }
};
</script>

<style>
.use {
  display: flex;
  padding: 0 0.15rem;
  justify-content: space-between;
}
#use > img {
  display: block;
  width: 4.7rem;
}
.u-banner {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 0 0.22rem 0.15rem;
}
.u-banner > div > span {
  font-size: 0.26rem;
  margin-top: 0.2rem;
  padding-left: 0.35rem;
}
.u-banner > div {
  display: flex;
  flex-direction: column;
}
.u-banner img {
  display: block;
  width: 100%;
}
.user-banner > span:last-child {
  padding: 0.2rem 0.4rem 0.2rem 0.3rem;
  font-size: 0.25rem;
  background-color: #dd4f43;
  color: white;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  letter-spacing: 0.15rem;
}
.user-banner > span:first-child {
  font-size: 0.45rem;
}
.user-banner {
  padding: 0.25rem 0 0.25rem 0.35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  width: 100vw;
  height: 100vh;
}
.user-top {
  width: 100%;
  background-image: url("../assets/images/u01_01.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7.5rem;
  padding-top: 0.7rem;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 0.25rem;
}
.user-top img {
  width: 0.6rem;
  height: 0.58rem;
}
</style>
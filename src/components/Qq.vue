<template>
  <div class="qq">
    <div class="qq-inner">
      <i class="iconfont iconsousuo"></i>
      <div>
        <img src="../assets/images/logo_03.jpg" alt />
      </div>
    </div>
    <div class="qq-fot">
      <div class="bannerOne swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/u62.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/u65.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/u68.jpg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="loop">
      <div class="banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/banner1_01.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/banner2_03.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/banner3_05.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/banner4_07.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/banner5_09.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/banner6_09.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <ul class="box">
        <li
          :class="num===index?'box-active':'box1-active'"
          v-for="(topic,index) in topics"
          @click="changTap(index)"
          :key="topic.id"
        >{{topic.text}}</li>
      </ul>
      <div
        class="lunbo"
        :style="{marginLeft:tapActive?0:'-100vw',
      transition: isTrantion ? 'margin-left 0.8s' : ''
      }"
      >
        <div v-for="(topic) in topics" :key="topic.id" class="box2">
          <div v-for="pic in topic.pics" :key="pic.id">
            <router-link :to="`${$publicUrl}/home/${pic.id}`">
              <img :src="pic.src" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "qq",
  data() {
    return {
      tapActive: true,
      isTrantion: true,
      num: 0
    };
  },
  computed: {
    topics() {
      return this.$store.state.pics.topics;
    }
  },
  methods: {
    changTap(index) {
      this.tapActive = !this.tapActive;
      this.num = index;
    }
  },
  created() {},
  mounted() {
    new Swiper(".bannerOne", {
      loop: true,
      autoplay: {
        delay: 1000
      },
      pagination: {
        el: ".swiper-pagination "
      }
    }),
      new Swiper(".banner", {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 10
      });
  }
};
</script>

<style>
.box-active {
  background: linear-gradient(to right, #cf8c86, #d52518);
  color: white;
}
.box1-active {
  background-color: #c9c9c9;
  color: black;
}
.qq-inner > div {
  display: flex;
  align-items: center;
  margin-right: 2.6rem;
}
.qq {
  width: 100vw;

  position: relative;
  padding-top: 1.63rem;
}
.qq-inner {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem 0.44rem 0.37rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: row-reverse;
}
.qq-inner > i {
  font-size: 0.7rem;
  display: block;
}
.qq-inner > div > img {
  display: block;
}
.qq-fot > .swiper-container {
  width: 100%;
  height: 4.5rem;
}
.qq-fot .swiper-slide img {
  width: 100%;
  height: 4.5rem;
}
.qq-fot,
.loop {
  margin-bottom: 0.13rem;
}
.banner {
  width: 100%;
  height: 2.8rem;
}
.banner .swiper-slide img {
  width: 100%;
  height: 2.8rem;
  display: block;
}
.box {
  display: flex;
  width: 100%;
  background-color: #c9c9c9;
}
.box > li {
  width: 50%;
  padding: 0.18rem;
  font-size: 0.4rem;
  list-style-type: none;
}
.box > li:first-child {
  text-align: right;
  padding-right: 0.3rem;
  border-top-right-radius: 0.55rem;
  border-bottom-right-radius: 0.55rem;
}
.box > li:last-child {
  text-align: left;
  padding-left: 0.3rem;
  border-top-left-radius: 0.55rem;
  border-bottom-left-radius: 0.55rem;
}
.box2 img {
  display: block;
  width: 100vw;
  margin-bottom: 10px;
}
.lunbo {
  width: 200vw;
  display: flex;
}
.tab {
  width: 100%;
  overflow: hidden;
}
.box2 {
  width: 100vw;
}
.box2 > div {
  width: 100vw;
}
.tab {
  padding-bottom: 1.57rem;
}
</style>
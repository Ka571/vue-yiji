<template>
  <div class="load">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/引导页1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/引导页2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/引导页3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/引导页4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/u10.jpg" alt />
          <div class="swiper-inner">-2019/8/22/-</div>
          <div class="swiper-iner">今日推送>></div>
        </div>
        <div class="swiper-slide pic">
          <div class="pic-top">
            <input placeholder="点击输入手机号/Email登录" type="text" />
            <input placeholder="输入密码" type="text" />
            <div class="load-a">
              <span>
                <router-link :to="`${$publicUrl}/home`">登录</router-link>
              </span>
              <span>注册</span>
            </div>
          </div>
          <div class="pic-fot">
            <div>
              <h3>
                登录或注册既同意登录艺集
                <span>用户服务协议</span>
              </h3>
            </div>
            <div class="fot-inner">
              <div>
                <i class="iconfont iconweibo"></i>
                <span>微博</span>
              </div>
              <div>
                <i class="iconfont iconweixin"></i>
                <span>微信</span>
              </div>
              <div>
                <i class="iconfont iconweibo"></i>
                <span>QQ</span>
              </div>
            </div>
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
  name: "load",
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.load {
  width: 100vw;
}
.swiper-container {
  width: 100vw;
  height: 100vh;
}
.swiper-slide > img {
  width: 100vw;
  height: 100vh;
}
.swiper-slide {
  position: relative;
}
.swiper-slide > .swiper-inner {
  position: absolute;
  left: 50%;
  width: 3.76rem;
  transform: translateX(-50%);
  bottom: 4.35rem;
  font-size: 0.47rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 5px;
}
.swiper-iner {
  position: absolute;
  left: 50%;
  bottom: 2.62rem;
  transform: translateX(-50%);
  width: 2.86rem;
  text-align: center;

  font-size: 0.5rem;
}
.swiper-wrapper > .pic {
  background-image: url("../assets/images/u13.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.pic > div > input {
  width: 100%;
  display: block;
  height: 1.49rem;
  text-align: center;
  border: 0;
  border-bottom: 1px solid #999;
  font-size: 0.4rem;
  background-color: #edeae3;
}
.pic-top {
  position: absolute;
  top: 6.45rem;
  width: 100%;
  padding: 0 1.04rem;
}
.load-a {
  padding: 0 1.4rem;
  margin-top: 1.01rem;
  display: flex;
  justify-content: space-between;
}
.load-a > span {
  font-size: 0.5rem;
}
.pic-fot {
  position: absolute;
  bottom: 0.54rem;
  left: 0;
  font-size: 0.35rem;
  width: 100%;
  text-align: center;
}
.pic-fot > div > h3 {
  color: #807765;
}
.pic-fot > div > h3 > span {
  color: white;
}
.fot-inner {
  margin-top: 1.21rem;
  display: flex;
  padding: 0 1.04rem;
  justify-content: space-between;
}
.fot-inner > div {
  display: flex;
  font-size: 0.5rem;
}
.fot-inner > div > i {
  font-size: 0.8rem;
  display: flex;
  align-self: center;
}
.fot-inner > div > span {
  display: flex;
  align-self: center;
}
</style>
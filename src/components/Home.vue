<template>
  <div class="home">
    <router-view></router-view>
    <ul class="nav">
      <li>
        <router-link exact active-class="nav-active" :to="`${$publicUrl}/home`">
          <i class="iconfont icontengxunweibo"></i>
          <span>展讯</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/recommend`">
          <i class="iconfont iconnoun__cc"></i>
          <span>推荐</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/fabu`">
          <i class="iconfont iconfeiji"></i>
          <span>发布</span>
        </router-link>
      </li>
      <li>
        <router-link active-class="nav-active" :to="`${$publicUrl}/home/user`">
          <i class="iconfont icongeren"></i>
          <span>个人</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.home > .nav > li > a.nav-active {
  color: rgb(236, 67, 67);
}
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.home > ul {
  list-style-type: none;
  padding: 0 0.93rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.nav {
  display: flex;

  background-color: #000000;
  align-items: center;
  justify-content: space-between;
}
.nav > li {
  display: block;
  /* height: 1.45rem; */
  padding-top: 0.2rem;
  padding-bottom: 0.14rem;
}
.nav > li > a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav > li > a > i {
  font-size: 0.85rem;
  color: white;
}
.nav > li > a.nav-active > i {
  color: rgb(236, 67, 67);
}
li > a > span {
  font-size: 0.4rem;
  color: white;
}
.nav > li > a.nav-active > span {
  color: rgb(236, 67, 67);
}
</style>
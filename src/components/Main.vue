<template>
  <div v-if="post" class="mainOne">
    <div class="homen">
      <router-link :to="`${$publicUrl}/home`">
        <span><</span>
      </router-link>
    </div>
    <div>
      <img :src="post.src" alt />
    </div>
    <div class="tit">
      <span>展览内容</span>
    </div>
    <div class="text">
      <p>{{post.text}}</p>
      <p>{{post.text1}}</p>
    </div>
    <div class="a-a">
      <img :src="post.src1" alt />
    </div>
    <div class="text">
      <p>{{post.author}}</p>
    </div>
    <div class="pics" v-for="pic in post.pics" :key="pic.id">
      <img :src="pic.srcOne" alt />
    </div>
    <div class="tit">
      <span>展览评论</span>
    </div>
    <div class="comment" v-for="comment in comments" :key="comment.id">{{comment.comment}}</div>
    <div class="fot-nav">
      <div class="xin">
        <i
          @click="changeShow"
          :class="show?'iconfont iconxin xin-active':'xinOne-active iconfont iconxin'"
        ></i>
        <span>{{show?"取消":"关注"}}</span>
      </div>
      <div class="xin">
        <router-link :to="`${$publicUrl}/ditu/${post.id}`">
          <i class="iconfont iconqunfengdaozheliqu xinTwo-active"></i>
          <span>到这</span>
        </router-link>
      </div>
      <div class="xin">
        <i class="iconfont iconfenxiang xinTwo-active"></i>
        <span @click="changeActive">分享</span>
      </div>
      <div class="xin">
        <router-link :to="`${$publicUrl}/comment/${post.id}`">
          <i class="iconfont iconpinglun xinTwo-active"></i>
          <span>评论</span>
        </router-link>
      </div>
    </div>
    <div class="tan" v-show="active">
      <div class="tan-top">
        <h2>分享到</h2>
        <div>
          <div class="tanOne">
            <div>
              <i class="iconfont iconnoun__cc"></i>
            </div>
            <span>艺集</span>
          </div>
          <div class="tanOne">
            <div>
              <i class="iconfont iconweixin"></i>
            </div>
            <span>微信</span>
          </div>
          <div class="tanOne">
            <div>
              <i class="iconfont iconweibo"></i>
            </div>
            <span>微博</span>
          </div>
          <div class="tanOne">
            <div>
              <i class="iconfont iconqq"></i>
            </div>
            <span>QQ</span>
          </div>
        </div>
      </div>
      <div @click="changeActive" class="tan-fot">
        <span>取消</span>
      </div>
    </div>
  </div>
  <div v-else>请稍等...</div>
</template>

<script>
export default {
  name: "mai",
  data() {
    return {
      show: true,
      active: false
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    changeActive() {
      this.active = !this.active;
    }
  },
  created() {
    console.log(this.$route.params.id);
  },
  computed: {
    comments() {
      const { id } = this.$route.params;
      return this.$store.state.main.comments.filter(ele => ele.postId === id);
    },
    post() {
      const { id } = this.$route.params;
      return this.$store.state.main.post.find(item => item.postId === id);
    }
  }
};
</script>

<style>
.a-a {
  margin-bottom: 0.15rem;
}
.tan-fot {
  border-top: 0.01rem solid red;
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;
  color: black;
  font-size: 0.42rem;
  background-color: #cccccc;
  opacity: 0.95;
  flex-grow: 1;
}
.tanOne > span {
  color: red;
}
.tanOne > div > i {
  display: block;
  font-size: 1.1rem;
  color: white;
}
.tanOne > div {
  width: 100%;
  height: 1.39rem;
  background-color: #d52315;
  border-radius: 50%;
  margin-bottom: 0.19rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tanOne {
  width: 1.39rem;
  display: flex;
  flex-direction: column;
}
.tan-top > div {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
}
.tan-top {
  padding: 0.56rem 1.44rem 0.92rem;
  text-align: center;
  font-size: 0.35rem;
  background-color: #dddddd;
  opacity: 0.9;
  flex-shrink: 0;
}
.tan {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.07rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.fot-nav {
  padding: 0.4rem 0.75rem;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.xin a {
  display: flex;
  align-items: center;
}
.xin-active {
  color: red;
}
.xinOne-active {
  color: rgb(104, 168, 228);
}
.xinTwo-active {
  color: white;
}
.xin {
  display: flex;
  align-items: center;
}
.xin span {
  font-size: 0.4rem;
  color: white;
}
.xin i {
  font-size: 0.6rem;
}
.pics {
  margin-bottom: 0.15rem;
}
.homen > a {
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
.homen {
  position: fixed;
  left: 0.42rem;
  top: 0.5rem;
}
.mainOne {
  width: 100vw;
  padding-bottom: 1.46rem;
}
.mainOne > div > img {
  display: block;
  width: 100%;
}
.tit > span {
  padding: 0.15rem 0.3rem;
  background-color: #dd4f43;
  border-top-right-radius: 0.28rem;
  border-bottom-right-radius: 0.28rem;
  font-size: 0.28rem;
  color: white;
  display: block;
  width: 2.1rem;
  margin-bottom: 0.15rem;
  letter-spacing: 0.03rem;
  font-weight: normal;
}
.text {
  padding: 0 0.42rem;
  font-size: 0.26rem;
  color: #000000;
  font-weight: normal;
  margin-bottom: 0.15rem;
}
.comment {
  padding: 0.35rem 0.8rem;
  font-size: 0.5rem;
  background-color: #dddddd;
}
</style>
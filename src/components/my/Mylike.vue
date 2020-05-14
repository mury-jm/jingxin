<template>
  <div>
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <!-- 导航栏End -->
    <div class="backbox">
      <div class="imgbox">
        <img src="../../assets/img/kk.png" alt />
        <span>购物车空空如也</span>
      </div>
    </div>
    <div class="box" v-for="(item,index) in mylikelist" :key="index">
      <van-card :price="item.price" :desc="item.text" :title="item.name" :thumb="item.img">
        <template #footer>
          <van-button size="mini" @click="del(index)">取消</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      del: "Main_store/dellike"
    })
  },
  computed: {
    ...mapState("Main_store", {
      mylikelist: "mylikelist"
    })
  },
  created() {
    // console.log(this.mylikelist);
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin: 10px;
}
.backbox {
  position: fixed;
  width: 100%;
  top: 46px;
  bottom: 50px;
  //   background-color: rgba($color: #000000, $alpha: 0.3);
  .imgbox {
    width: 180px;
    height: 180px;
    opacity: 0.6;
    position: absolute;
    color: #ddd;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    img {
      width: 100%;
    }
  }
}
</style>
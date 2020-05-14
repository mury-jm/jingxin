<template>
  <div>
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    </van-sticky>
    <!-- 导航栏End -->
    <div class="backbox">
      <div class="imgbox" v-show="myvideolist.length == 0" >
        <img src="../../assets/img/kk.png" alt />
        <span>购物车空空如也</span>
      </div>
    </div>

    <div class="box clearfix" v-for="(item,index) in myvideolist" :key="index">
      <div class="fl imgbox">
        <img :src="item.img" />
      </div>
      <div class="textbox">
        <h1>{{item.name}}</h1>
        <p>{{item.tit}}</p>
      </div>
          <van-button class="fr" @click="delvideo" size="mini">取消</van-button>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations({
            delvideo:"Main_store/delvideo"
        })
    },
    computed:{
        ...mapState("Main_store",{
            myvideolist:'myvideolist'
        })
    },
    created(){
        // console.log(this.myvideolist)
    }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  margin: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  .imgbox {
    width: 35%;
    img {
      width: 100%;
    }
  }
  .textbox {
    margin-left: 35%;
    width: 65%;
    position: relative;
    margin-bottom: 10px;
    h1 {
      margin: 10px 0;
      text-align: center;
    }
    p {
      margin: 0;
      padding-left: 5px;
      box-sizing: border-box;
      text-indent: 2em;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .collect {
      position: absolute;
      width: 60%;
      font-size: 16px;
      left: 0;
      right: 0;
      margin: 10px auto;
    }
  }
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
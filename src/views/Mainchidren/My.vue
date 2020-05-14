<template>
  <div>
    <div class="pinkbox clearfix" v-show="$store.state.mybool">
      <h1>个人中心</h1>
      <div class="fl">
        <h2 @click="$router.push({name:'登录'})">请登录</h2>
        <p>登录后才能燃烧经费</p>
      </div>
      <div class="fr">
        <van-icon name="star-o" />
      </div>
    </div>
    <div class="pinkbox clearfix" v-show="$store.state.mybool2">
      <h1>个人中心</h1>
      <div class="fl imgbig">
        <div class="imgbox"></div>
        <div class="imgtxt">
          <h2>{{this.$store.state.username}}</h2>
          <p>冲冲冲</p>
        </div>
      </div>
    </div>

    <div class="hei">
      <div class="van-col--22 orderbox">
        <van-grid>
          <van-grid-item
            icon="balance-list-o"
            text="全部订单"
            :info="lists.length = lists.length == 0 ? '' :lists.length"
            @click="go_order"
          />
          <van-grid-item
            icon="bill-o"
            :info="type1.length = type1.length == 0 ? '' :type1.length"
            text="待付款"
             @click="go_ok"
          />
          <van-grid-item
            icon="logistics"
            :info="type2.length = type2.length == 0 ? '' :type2.length"
            text="待发货"
            @click="go_good"
          />
          <van-grid-item
            icon="records"
            :info="type3.length = type3.length == 0 ? '' :type3.length"
            text="待评价"
             @click="go_dval"
          />
        </van-grid>
      </div>
    </div>
    <van-cell-group>
      <van-cell icon="like" title="我的商品" @click="go_mylike" is-link />
      <van-cell icon="bill" title="我的视频" @click="go_myvideo" is-link />
      <van-cell icon="location" @click="go_address" title="我的地址" is-link />
      <van-cell icon="setting" title="设置" is-link />
      <van-cell v-show="$store.state.mybool2" icon="setting" title="退出登录" @click="out" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from 'vant';
export default {
  methods: {
    go_order(){
       let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
        this.$router.push({name:'全部订单'})
    },
    go_ok(){
       let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
        this.$router.push({name:'待付款'})
    },
    go_good(){
       let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
        this.$router.push({name:'待发货'})
    },
    go_dval(){
       let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
        this.$router.push({name:'待评价'})
    },
    go_mylike() {
      let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
      this.$router.push({name:'我的商品收藏'})
    },
    go_myvideo() {let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
      this.$router.push({name:'我的视频收藏'})
    },
    go_address(){
      let _this = this
      if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'登录'})
          }})
          return;
        }
      this.address_false();
      this.$router.push({name:'地址列表'})
    },
    out() {
      Toast("退出成功");
      this.$store.state.mybool = true;
      this.$store.state.mybool2 = false;
    },
    ...mapMutations({
      address_false:'Main_store/address_false'
    })
  },
  computed: {
    ...mapState("Allorder", {
      lists: "lists",
      type1: "type1",
      type2: "type2",
      type3: "type3"
    })
  }
};
</script>

<style lang="scss" scoped>
.pinkbox {
  background-color: rgba($color: #000000, $alpha: 0.3);
  padding: 10px;
  color: #f7e9ef;
  &:nth-child(2) {
    background: url("../../assets/img/logoindex.jpg");
    background-size: 100%;
  }
  .imgbig {
    margin-left: 10px;
    .imgbox {
      float: left;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      background: url("../../assets/img/5.jpg") -2.3px 0.1px no-repeat;
      background-size: 160%;
    }
    .imgtxt {
      margin-left: 20px;
      float: left;
      h2 {
        font-size: 20px;
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 20px;
    // font-weight: 600;
  }
  .fl {
    padding: 15px 0;
    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  .fr {
    height: 50px;
    width: 50px;
    color: #adb1b6;
    background-color: #f2f3f5;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    margin-top: 20px;
    i {
      font-size: 20px;
    }
  }
}
.hei {
  height: 80px;
  background-color: #f3f3f3;
  position: relative;
  .orderbox {
    background-color: #ffffff;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    overflow: hidden;
    color: #f25e86;
  }
}
.van-cell {
  &:nth-child(1) .van-cell__left-icon {
    color: red;
  }
  &:nth-child(2) .van-cell__left-icon {
    color: orange;
  }
  &:nth-child(3) .van-cell__left-icon {
    color: aqua;
  }
  &:nth-child(4) .van-cell__left-icon {
    color: green;
  }
}
</style>
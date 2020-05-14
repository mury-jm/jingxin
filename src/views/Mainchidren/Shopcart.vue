<template>
  <div>
    <!-- 标题 -->
    <van-sticky class="navtop">
      <van-nav-bar :title="$route.name" class="nav" />
      <div class="right_text" @click="btnbool = !btnbool">
        <span v-show="!btnbool">编辑</span>
        <span v-show="btnbool">完成</span>
      </div>
    </van-sticky>
    <!-- 背景图片 -->

    <div class="backbox">
      <div class="imgbox" v-show="imgbool">
        <img src="../../assets/img/kk.png" alt />
        <span>购物车空空如也</span>
      </div>
    </div>

    <ul class="shopbox">
      <li v-for="(item,index) in shopall" :key="index" v-show="$store.state.mybool2"> 
        <van-swipe-cell>
          <div class="price">￥{{item.price}}</div>
          <van-checkbox class="selectbtn" v-model="item.active"></van-checkbox>
          <van-card :desc="item.text" :title="item.name" :thumb="item.img" />
          <div class="pricebox">
            <div class="biaoqian fl">
              <van-tag mark type="primary">{{item.guige}}</van-tag>
              <van-tag mark type="primary">{{item.fangshi}}</van-tag>
            </div>
            <van-stepper
              class="fl"
              integer
              disable-input
              :value="item.num"
              @plus="plusbtn(item)"
              @minus="minusbtn(item)"
            />
          </div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="delbtn({index})"
            />
          </template>
        </van-swipe-cell>
      </li>
    </ul>
    <div class="hei"></div>
    <div class="hei"></div>
    <van-submit-bar :price="sum*100" @submit="go_order" :button-text="'结算('+this.shopnum+')'">
      <van-checkbox v-model="checkAllbox">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar
      v-show="btnbool"
      :price="sum*100"
      class="nonebox"
      :button-text="'删除('+this.shopnum+')'"
      @submit="delbtn"
    >
      <van-checkbox v-model="checkAllbox">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { Toast } from 'vant';
export default {
  data() {
    return {
      imgbool: true,
      btnbool: false,
      demo: [],
      demo1: []
    };
  },
  methods: {
    go_order() {
      if(this.shopall.length == 0){
          Toast('还没挑选商品哦~~亲')
          return;
        }
      // console.log(this.shopall);
      this.order_false();
      this.shopall.forEach((e) => {
        // console.log('sdkjflaksdjflksdajf',e)
        if (e.active) {
          // console.log()
          // console.log('选中的+++++++++++++++++++++++',e)
          this.demo.push(e);
        }
      });
      this.shopall.splice(0, this.demo.length);
      this.orderall(this.demo);
      this.$router.push({ name: "订单" });
      // console.log(this.orderlist);
    },
    plusbtn(item) {
      item.num += 1;
    },
    minusbtn(item) {
      item.num -= 1;
    },

    delbtn(index) {
      if (this.btnbool) {
        this.shopall.forEach((e, age) => {
          if (e.active) {
            this.demo1.push(e);
            this.shopall.splice(age, this.demo1.length);
          }
        });
      }

      this.shopall.splice(index, 1);
      if (this.shopall.length == 0) {
        this.imgbool = true;
      }
    },
    ...mapMutations({
      order_false: "Main_store/order_false",
      orderall: "Main_store/orderall",
      nook_false: "Main_store/nook_false",
    })
  },
  computed: {
    ...mapState("Main_store", {
      shopall: "shopall",
      titbox: "titbox",
      orderlist: "orderlist",
      orderbool: "orderbool",
      nookbool: "nookbool",
      nooklength: "nooklength",
    }),
    ...mapGetters({
      sum: "Main_store/sum",
      shopnum: "Main_store/shopnum",
      checkAll: "Main_store/checkAll"
    }),
    checkAllbox: {
      get() {
        return this.checkAll;
      },
      set(value) {
        this.shopall.forEach(element => {
          return (element.active = value);
        });
      }
    }
  },
  created() {
    // console.log(this.nookbool)
    if (this.nookbool) {
      this.shopall.splice(-this.nooklength, this.nooklength);
    }
    if (this.shopall.length > 0) {
      this.imgbool = false;
    }
  },
  destroyed() {
    this.nook_false();
  },
};
</script>

<style lang="scss" scoped>
.navtop {
  position: relative;
  .right_text {
    text-align: center;
    position: absolute;
    width: 20%;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 46px;
    font-size: 16px;
    z-index: 10;
    font-weight: 600;
    color: #ccc;
  }
}

.nav {
  .van-nav-bar__title {
    font-size: 20px;
    color: #ddd;
    font-weight: 700;
  }
  background-color: rgba($color: #000000, $alpha: 0.3);
  &:nth-child(2) {
    opacity: 1;
  }
}
.backbox {
  position: fixed;
  width: 100%;
  top: 46px;
  bottom: 50px;
  background-color: rgba($color: #000000, $alpha: 0.3);
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
.shopbox {
  margin: 10px 10px;
  overflow: hidden;
  border-radius: 20px;
  li {
    width: 100%;
    height: 100%;
    border-bottom: 5px solid #ddd;
    position: relative;
    &:last-child {
      border-bottom: none;
    }
    .price {
      position: absolute;
      right: 20px;
      z-index: 10;
      top: 6px;
      color: #4ba6f3;
    }
    .selectbtn {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 3px;
      margin: auto;
      z-index: 10;
    }
    .van-card__title {
      font-size: 18px;
      line-height: 20px;
    }
    .van-card__desc {
      margin-top: 10px;
    }
    .van-card:not(:first-child) {
      margin: 0;
    }
    .pricebox {
      position: absolute;
      bottom: 5px;
      right: 20px;
      width: 60%;
      .biaoqian {
        margin-right: 20px;
        span {
          margin-right: 5px;
        }
      }
    }
    .delete-button {
      height: 100%;
    }
  }
}
.van-submit-bar {
  bottom: 50px;
  opacity: 0.9;
}
</style>
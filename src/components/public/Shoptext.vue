<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar class="nav" left-arrow @click-left="onClickLeft" />
    <van-sticky @scroll="scorlltop">
      <div class="navbox" ref="navbox">
        <span class="active">商品</span>
        <span>IP</span>
        <span>细节</span>
      </div>
    </van-sticky>
    <!-- 顶部导航End -->

    <!-- 商品图片 -->
    <div class="shopimg">
      <img :src="$route.query.img" alt />
    </div>
    <!-- 商品图片End -->

    <!-- 商品名字 收藏 -->
    <div class="price clearfix">
      <h2 class="fl">{{$route.query.name}}</h2>
      <div class="fr">
        <van-icon
          name="like"
          v-show="imglists[$route.query.index1].botbox[$route.query.index2].imgs[$route.query.index3].isActive"
          @click="like({index1:$route.query.index1,index2:$route.query.index2,index3:$route.query.index3})"
        />
        <van-icon
          name="like"
          v-show="!imglists[$route.query.index1].botbox[$route.query.index2].imgs[$route.query.index3].isActive"
          @click="like2({index1:$route.query.index1,index2:$route.query.index2,index3:$route.query.index3})"
        />
      </div>
    </div>
    <!-- 商品名字End -->

    <!-- 价格  规格 -->
    <div class="describe">
      <h2>￥{{imglists[$route.query.index1].botbox[$route.query.index2].imgs[$route.query.index3].price}}</h2>
      <p>{{imglists[$route.query.index1].botbox[$route.query.index2].imgs[$route.query.index3].text}}</p>
      <div
        class="guige clearfix"
        v-for="(item,guigeindex) in imglists[$route.query.index1].botbox[$route.query.index2].imgs[$route.query.index3].guige"
        :key="guigeindex"
      >
        <div class="leftbox fl">{{item.tit}}</div>
        <div class="rightbox fl" ref="btnbox">
          <van-button
            v-for="(item,index) in item.datalist"
            :class="{btnactive:item.isActive}"
            @click="aa({item,guigeindex,guigeindex})"
            :key="index"
            round
            type="info"
          >{{item.name}}</van-button>
        </div>
      </div>
    </div>
    <!-- 价格  规格End -->

    <!-- 流程 -->
    <div class="process">
      <van-cell :title="'ip： '+ $route.query.name" is-link />
      <van-cell title="品牌：鲸心" is-link />
      <van-steps>
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div>
    <!-- 流程End -->

    <!-- 详情图片 -->
    <img
      class="shopall"
      src="https://i0.hdslb.com/bfs/mall/mall/2f/c3/2fc38eb46989c1404208a69580152b27.jpg@.webp"
      alt
    />
    <!-- 详情图片End -->

    <!-- 商品导航高度 -->
    <div class="hei"></div>

    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="首页" @click="$router.push({name:'首页'})" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="shopnum"
        @click="$router.push({name:'购物车'})"
      />
      <van-goods-action-button
        type="warning"
        class="no_bright"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="router_go" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      numselsect: [false, false],
      flag: false,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      shopcarts1: [],
      shopcarts2: [],
      shopcarts3: [],
      shopcarts4: [],
      shopcarts: [],
      shopnum: 0,
      xiabiao: [],
      order: []
    };
  },
  methods: {
    router_go() {
      // console.log(this.$route.query);
      let _this = this;
      if (this.flag) {
        if (!this.$store.state.mybool2) {
          Toast({
            message: "请优先登录哦~~亲",
            onOpened() {
              _this.$router.push({ name: "我的" });
            }
          });
          return;
        }
        this.order_true();
        this.base_true();
        this.orderlist.push(this.order);
        this.$router.push({
          name: "订单",
          query: this.$route.query
        });
      } else {
        Toast("请添加商品");
      }
    },
    scorlltop() {
      // console.log(document.documentElement.scrollTop);
      if (
        document.documentElement.scrollTop >= 0 &&
        document.documentElement.scrollTop < 475
      ) {
        this.$refs.navbox.style.opacity = (
          document.documentElement.scrollTop / 330
        ).toFixed(2);

        this.$refs.navbox.getElementsByTagName("span").forEach(element => {
          if (element.classList.contains("active") == true) {
            if (this.$refs.navbox.getElementsByClassName("active")[1]) {
              this.$refs.navbox
                .getElementsByClassName("active")[1]
                .classList.remove("active");
              return;
            }
          }
          this.$refs.navbox
            .getElementsByTagName("span")[0]
            .classList.add("active");
        });
      } else if (
        document.documentElement.scrollTop >= 475 &&
        document.documentElement.scrollTop < 630
      ) {
        this.$refs.navbox.getElementsByTagName("span").forEach(element => {
          if (element.classList.contains("active") == true) {
            if (this.$refs.navbox.getElementsByClassName("active")[0]) {
              this.$refs.navbox
                .getElementsByClassName("active")[0]
                .classList.remove("active");
              return;
            }
          }

          this.$refs.navbox
            .getElementsByTagName("span")[1]
            .classList.add("active");
        });
      } else if (document.documentElement.scrollTop >= 630) {
        this.$refs.navbox.getElementsByTagName("span").forEach(element => {
          if (element.classList.contains("active") == true) {
            this.$refs.navbox
              .getElementsByClassName("active")[0]
              .classList.remove("active");
          }
          this.$refs.navbox
            .getElementsByTagName("span")[2]
            .classList.add("active");
        });
      }
    },
    onClickLeft() {
      this.$router.push({ name: "分类" });
    },
    ...mapMutations({
      like: "Main_store/like",
      like2: "Main_store/like2",
      order_true: "Main_store/order_true",
      base_true: "Main_store/base_true",
      nookdelleng: "Main_store/nookdelleng"
    }),
    onClickButton() {
      let aa = document.getElementsByClassName("btnactive");
      if (this.numselsect[0] && this.numselsect[1]) {
        // console.log("1111");
        this.num1++;
        this.shopcarts1.push({
          id: 1,
          name: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].name,
          price: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].price,
          text: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].text,
          img: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].img,
          guige: aa[0].innerText,
          fangshi: aa[1].innerText,
          num: this.num1,
          active: true
        });

        this.shopcarts.push(this.shopcarts1[this.shopcarts1.length - 1]);
      } else if (this.numselsect[0] && !this.numselsect[1]) {
        // console.log("2222");
        this.num2++;
        this.shopcarts2.push({
          id: 2,
          name: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].name,
          price: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].price,
          text: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].text,
          img: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].img,
          guige: aa[0].innerText,
          fangshi: aa[1].innerText,
          num: this.num2,
          active: true
        });
        this.shopcarts.push(this.shopcarts2[this.shopcarts2.length - 1]);
      } else if (!this.numselsect[0] && this.numselsect[1]) {
        // console.log("333");
        this.num3++;
        this.shopcarts3.push({
          id: 3,
          name: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].name,
          price: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].price,
          text: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].text,
          img: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].img,
          guige: aa[0].innerText,
          fangshi: aa[1].innerText,
          num: this.num3,
          active: true
        });
        this.shopcarts.push(this.shopcarts3[this.shopcarts3.length - 1]);
      } else if (!this.numselsect[0] && !this.numselsect[1]) {
        // console.log("444");
        this.num4++;
        this.shopcarts4.push({
          id: 4,
          name: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].name,
          price: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].price,
          text: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].text,
          img: this.imglists[this.$route.query.index1].botbox[
            this.$route.query.index2
          ].imgs[this.$route.query.index3].img,
          guige: aa[0].innerText,
          fangshi: aa[1].innerText,
          num: this.num4,
          active: true
        });
        this.shopcarts.push(this.shopcarts4[this.shopcarts4.length - 1]);
      }
      // console.log(this.shopcarts);
      if (this.shopcarts[this.shopcarts.length - 1].id == 1) {
        this.xiabiao.push(this.shopcarts[this.shopcarts.length - 1].id);
      } else if (this.shopcarts[this.shopcarts.length - 1].id == 2) {
        this.xiabiao.push(this.shopcarts[this.shopcarts.length - 1].id);
      } else if (this.shopcarts[this.shopcarts.length - 1].id == 3) {
        this.xiabiao.push(this.shopcarts[this.shopcarts.length - 1].id);
      } else if (this.shopcarts[this.shopcarts.length - 1].id == 4) {
        this.xiabiao.push(this.shopcarts[this.shopcarts.length - 1].id);
      }
      this.shopnum += 1;
      this.flag = true;
      // console.log(this.shopall, "this.shopall");
    },
    aa(object) {
      this.imglists[this.$route.query.index1].botbox[
        this.$route.query.index2
      ].imgs[this.$route.query.index3].guige[
        object.guigeindex
      ].datalist.forEach(element => {
        if (element.isActive == true) {
          element.isActive = false;
        }
      });
      object.item.isActive = true;
      this.numselsect[object.guigeindex] = !this.numselsect[object.guigeindex];
    }
  },
  computed: {
    ...mapState("Main_store", {
      imglists: "imglists",
      shopall: "shopall",
      orderlist: "orderlist"
    })
  },
  created() {
    // console.log(this.$route.query);
    // console.log(this.orderlist,'orderlist')
  },
  destroyed() {
    if (this.$store.state.mybool2) {
      if (this.flag) {
        for (let i = 0; i < this.shopcarts.length; i++) {
          if (this.shopcarts[i] == undefined) {
            this.shopcarts.splice(i, 1);
            i = i - 1;
          }
        }
        this.shopall.push(this.shopcarts[this.xiabiao.lastIndexOf(1)]);
        this.shopall.push(this.shopcarts[this.xiabiao.lastIndexOf(2)]);
        this.shopall.push(this.shopcarts[this.xiabiao.lastIndexOf(3)]);
        this.shopall.push(this.shopcarts[this.xiabiao.lastIndexOf(4)]);
        for (let i = 0; i < this.shopall.length; i++) {
          if (this.shopall[i] == undefined) {
            this.shopall.splice(i, 1);
            i = i - 1;
          }
        }
        this.order.push(this.shopcarts[this.xiabiao.lastIndexOf(1)]);
        this.order.push(this.shopcarts[this.xiabiao.lastIndexOf(2)]);
        this.order.push(this.shopcarts[this.xiabiao.lastIndexOf(3)]);
        this.order.push(this.shopcarts[this.xiabiao.lastIndexOf(4)]);
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i] == undefined) {
            this.order.splice(i, 1);
            i = i - 1;
          }
        }
        // console.log(this.order);
        this.nookdelleng(this.order);
        // console.log("退出中，====>", this.shopall);
        // 初始化  规格按键
      }
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    opacity: 0;
  }
}
.hei {
  height: 50px;
}
.nav {
  position: fixed;
  top: 0;
  z-index: 100;
}
.navbox {
  position: fixed;
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: rgba($color: white, $alpha: 0.6);
  text-align: center;
  line-height: 50px;
  span {
    margin: 13px;
    color: #a0a0a0;
    font-weight: 500;
    &.active {
      color: #333;
      font-weight: 700;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: pink;
      }
    }
  }
}
.shopimg {
  background-color: #f4f4f4;
  img {
    width: 100%;
  }
}
.price {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  h2 {
    margin: 0;
    font-size: 18px;
  }
  .fr {
    line-height: 50px;
    height: 50px;
    position: relative;
    i {
      height: 100%;
      font-size: 24px;
      line-height: 50px;
      position: absolute;
      color: aqua;
      right: 15px;
      &:nth-child(2) {
        color: yellow;
      }
    }
  }
}
.describe {
  h2 {
    margin: 0;
    font-size: 16px;
  }
  p {
    color: #999;
  }
  padding: 0 15px;
  .guige {
    margin-bottom: 10px;
    .leftbox {
      width: 20%;
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
    .rightbox {
      width: 80%;
      height: 45px;
      button {
        margin: 0 15px;
        &.van-button--info {
          width: 30%;
          background: #e5e5e5;
          border: none;
          &.btnactive {
            background-color: #aef8e2;
            // color: ;
          }
        }
      }
    }
  }
}
.process {
  padding: 15px;
  border-top: 10px solid rgb(244, 244, 244);
}
.shopall {
  width: 100%;
}
</style>
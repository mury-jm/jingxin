<template>
  <div>
    <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <!-- 导航栏End -->

    <!-- 联系人 -->
    <div class="contact">
      <div
        role="button"
        tabindex="0"
        class="van-cell van-cell--clickable van-cell--center van-cell--borderless van-contact-card van-contact-card--add"
        @click="go_adress"
        v-show="contentbool"
      >
        <i class="van-icon van-icon-add-square van-cell__left-icon">
          <!---->
        </i>
        <div class="van-cell__value van-cell__value--alone van-contact-card__value">添加联系人</div>
        <i class="van-icon van-icon-arrow van-cell__right-icon">
          <!---->
        </i>
      </div>
      <div
        class="van-cell van-cell--center van-cell--borderless van-contact-card van-contact-card--edit"
        v-show="!contentbool"
        @click="go_adress"
      >
        <i class="van-icon van-icon-contact van-cell__left-icon">
          <!---->
        </i>
        <div class="van-cell__value van-cell__value--alone van-contact-card__value">
          <div>姓名：{{contentlist.name}}</div>
          <div>电话：{{contentlist.tel}}</div>
          <div>地址：{{contentlist.address}}</div>
        </div>
      </div>
    </div>
    <!-- 联系人End -->

    <!-- 商品信息 -->
    <div class="good" v-show="true" v-for="(item,index) in orderlist" :key="index">
      <van-card
        v-for="(item_s,index_s) in item"
        :key="index_s"
        :num="item_s.num"
        :price="item_s.price"
        :desc="item_s.text"
        :title="item_s.name"
        :thumb="item_s.img"
      >
        <template #tags>
          <van-tag plain type="danger">{{item_s.guige}}</van-tag>
          <van-tag plain type="danger">{{item_s.fangshi}}</van-tag>
        </template>
      </van-card>
    </div>
    <!-- 商品信息End -->

    <!-- 提交订单栏 -->
    <van-submit-bar :price="price *100" button-text="提交订单" @submit="go_my" />
    <!-- 提交订单栏End -->

    <div class="hei"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      delbool: false
    };
  },
  methods: {
    go_adress() {
      this.base_false();
      this.address_true();
      this.$router.push({ name: "地址列表" });
      // let aa =JSON.parse(JSON.stringify(this.orderlist));
      // aa.push(this.orderlist);
      // console.log(aa);
      // this.orderlist.splice(0,1)
      // console.log(aa,'改变后')
    },
    go_my() {
      // console.log(this.contentlist);
      if (this.contentbool) {
        Toast("请添加联系人");
        return;
      }
      this.base_false();
      this.nook_true();
      this.delbool = true;
      this.$router.push({ name: "全部订单" });
      let obj = {
        type: 2, //待收货
        orderId: new Date().getTime(),
        address: JSON.parse(JSON.stringify(this.contentlist)),
        goodlist: JSON.parse(JSON.stringify(this.orderlist[0]))
      };
      this.add(obj);
    },
    onClickLeft() {
      Dialog.confirm({
        message: "确定取消订单么？"
      })
        .then(() => {
          this.delbool = true;
          // console.log(this.orderlist);
          if (this.orderbool) {
            this.nook_true();

            this.$router.push({
              name: "商品",
              query: {
                name: this.basequery.name,
                img: this.basequery.img,
                index1: this.basequery.index1,
                index2: this.basequery.index2,
                index3: this.basequery.index3
              }
            });
          } else {
            this.$router.push({ name: "购物车" });
          }
          let obj = {
            type: 1, //未完成
            orderId: new Date().getTime(),
            address: JSON.parse(JSON.stringify(this.contentlist)),
            goodlist: JSON.parse(JSON.stringify(this.orderlist[0]))
          };
          this.add(obj);
        })
        .catch(() => {
          // console.log("不退出了");
        });
    },
    ...mapMutations({
      removelist: "Main_store/removelist",
      basedemo: "Main_store/basedemo",
      base_false: "Main_store/base_false",
      nook_true: "Main_store/nook_true",
      address_true: "Main_store/address_true",
      add: "Allorder/add"
    })
  },
  computed: {
    ...mapState("Main_store", {
      orderlist: "orderlist",
      contentbool: "contentbool",
      orderbool: "orderbool",
      contentlist: "contentlist",
      basequery: "basequery",
      basebool: "basebool"
    }),
    ...mapGetters({
      price: "Main_store/orderSum"
    }),
    ...mapState("Allorder", {
      lists: "lists"
    })
  },
  created() {
    if (this.basebool) {
      if (this.$route.query.name) {
        this.basedemo(this.$route.query);
      }
    }
    // console.log(this.orderbool, "++++++++++++++++++++++++++++++++");
  },
  destroyed() {
    if (this.delbool) {
      this.removelist();
    }
  }
};
</script>

<style lang="scss" scoped>
.good {
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
}
.hei {
  height: 50px;
}
</style>
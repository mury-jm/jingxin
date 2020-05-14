<template>
  <div>
    <div class="box" v-for="(item,index) in datalists" :key="index">
      <div class="top clearfix">
        <div class="titnumber fl">订单号:{{item.orderId}}</div>
        <div class="state fr">{{item.type}}</div>
      </div>
      <van-card
        v-for="(good,age) in item.goodlist"
        :key="age"
        :num="good.num"
        :price="good.price"
        :desc="good.text"
        :title="good.name"
        :thumb="good.img"
      >
        <template #tags>
          <van-tag plain type="danger">{{good.guige}}</van-tag>
          <van-tag plain type="danger">{{good.fangshi}}</van-tag>
        </template>
        <template #footer v-if="item.type == 1">
          <van-button size="mini" @click="ok(item,index)">支付订单</van-button>
          <van-button size="mini" @click="del(index)">删除</van-button>
        </template>
        <template #footer v-else-if="item.type == 2">
          <van-button size="mini" @click="goods(item)">确让收货</van-button>
          <van-button size="mini" @click="del(index)">删除</van-button>
        </template>
        <template #footer v-else-if="item.type == 3">
          <van-button size="mini" @click="eval">评价商品</van-button>
          <van-button size="mini" @click="del(index)">删除</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  methods: {
    ok(item) {
        // console.log(index)
      item.type = 2;
          this.type1.splice(0,1)
    },
    goods(item) {
      item.type = 3;
      // console.log(item);
    },
    eval() {
      Toast("待优化");
    },
    ...mapMutations({
      del: "Allorder/del"
    })
  },
  computed: {
    ...mapState("Allorder", {
      datalists: "lists",
      type1: "type1",
      type2: "type2",
      type3: "type3"
    })
  },
  destroyed() {
    this.datalists.forEach(e => {
      if (e.type == 1) {
        // console.log(e, "未付款");
        if(this.type1.indexOf(e.orderId) == -1){
        this.type1.push(e.orderId)
        }
      } else if (e.type == 2) {
        // console.log(e, "待收货");
        if(this.type2.indexOf(e.orderId) == -1){
        this.type2.push(e.orderId)
        }
      } else {
        // console.log(e, "已完成");
        if(this.type3.indexOf(e.orderId) == -1){
        this.type3.push(e.orderId)
        }
      }
      // console.log(this.type2, 22222222)
    });
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
<template>
  <div>
    <div class="box" v-for="(item,index) in datalists" :key="index" v-show="item.type == 1">
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
          <van-button size="mini" @click="ok(item)" >支付订单</van-button>
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
import { Toast } from 'vant';
export default {
  methods: {
      ok(item){
          item.type = 2;
          // console.log(item)
      },
      goods(item){
          item.type = 3;
          // console.log(item)
      },
      eval(){
          Toast('待优化')
      },
    ...mapMutations({
      del: "Allorder/del"
    })
  },
  computed: {
    ...mapState("Allorder", {
      datalists: "lists"
    })
  },
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
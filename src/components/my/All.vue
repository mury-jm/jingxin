<template>
  <div>
      <!-- 导航栏 -->
    <van-sticky>
      <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.push({name:'我的'})" />
    </van-sticky>
      <!-- 导航栏end -->

    <van-tabs v-model="active">
  <van-tab v-for="(item,index) in lists" :key="index">
    <template #title>
      <router-link :to="{name:item.name}" tag="div">{{item.name}}</router-link>
    </template>
    <router-view></router-view>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                {name:'全部订单'},
                {name:'待付款'},
                {name:'待发货'},
                {name:'待评价'},
            ],
            active:0
        }
    },
    created(){
      // console.log(this.$route.name)
      this.active = this.$route.name
      if(this.$route.name == '全部订单'){
        this.active = 0;
      }else if(this.$route.name == '待付款'){
        this.active =1;
      }else if(this.$route.name == '待发货'){
        this.active =2;
      }else if(this.$route.name == '待评价'){
        this.active =3;
      }
    }
};
</script>

<style lang="scss" scoped>
</style>
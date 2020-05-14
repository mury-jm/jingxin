<template>
  <div>
    <transition mode="out-in" :duration="{enter:400, leave:400}" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view></router-view>
        </transition>
    <div class="background"></div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        class="bactar"
        v-for="(item,index) in datalists"
        :key="index"
        :name="item.name"
        :icon="item.icon"
        @click="$router.push({name:item.name})"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: "首页"
    };
  },
  computed: {
    ...mapState("Main_store", {
      datalists: "datalists"
    })
  },
  created() {
    this.active = this.$router.currentRoute.name;
  }
};
</script>

<style lang="scss" >
.background {
  width: 100%;
  height: 100%;
  background: url("../assets/img/21.jpg");
  background-size: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.6;
}
.van-tabbar--fixed {
  opacity: 0.8;
}
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
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}
.bactar {
  height: 50px;
}
.hei {
  height: 50px;
}
</style>
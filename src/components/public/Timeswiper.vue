<template>
  <div>
    <van-swipe class="swiper" :autoplay="2500">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.img"  />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  data() {
    return {
    };
  },
  props:['images']
};
</script>

<style lang="scss" scoped>
.swiper{
  img{
    width: 100%;
  }
}
</style>
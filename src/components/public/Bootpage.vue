<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper containerguidepage">
        <div class="swiper-slide">
          <img :src="require('../../assets/img/20.jpg')" alt />
            <div class="txt">
            <h3 ref="boot1" class="animated rubberBand">欢迎使用 鲸心影视</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <img :src="require('../../assets/img/22.jpg')" alt />
          <div class="txt">
            <h3 ref="boot2" class="animated rubberBand">精美手办 专属定制</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <img :src="require('../../assets/img/23.jpg')" alt />
          <div class="txt">
            <h3 ref="boot3" class="animated rubberBand">海量视频  免费观看</h3>
          </div>
          <van-button to="/main/home" class="tiyan" type="warning">立即体验</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination paginationguidepage"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.state.showbool = false;
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      pagination: { el: ".swiper-pagination" },
      on: {
        slideChangeTransitionStart: function() {
          _this.$refs.boot1.classList.remove("rubberBand");
          _this.$refs.boot2.classList.remove("rubberBand");
          _this.$refs.boot3.classList.remove("rubberBand");
        },
        slideChangeTransitionEnd: function() {
          _this.$refs.boot1.classList.add("rubberBand");
          _this.$refs.boot2.classList.add("rubberBand");
          _this.$refs.boot3.classList.add("rubberBand");
        }
      }
    });
  },
  destroyed() {
    this.$store.state.showbool = true;
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  .txt {
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 20px;
    color: #f6feff;
  }
}
.tiyan {
  position: absolute;
  bottom:180px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: none;
}
</style>
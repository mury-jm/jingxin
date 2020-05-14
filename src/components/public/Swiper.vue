<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container swiperRecommend">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in images" :key="index" @click="btn(item)">
          <div class="imgbox">
            <img :src="item.titimg" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    btn(item) {
      // console.log(item),
        this.$router.push({
          name: "视频",
          query: { name: item.name, type: item.type, from:this.$route.query.from }
        });
        location.reload();
    }
  },
  props: ["images"],
  mounted() {
    new Swiper(".swiperRecommend", {
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 15
    });
  },
  created() {
    // console.log(this.images);
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img {
    width: 100%;
  }
}
.imgbox {
  p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
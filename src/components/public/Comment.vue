<template>
  <div>
    <ul class="combot">
      <li v-for="(item,index) in imglist" :key="index">
        <div class="topbox clearfix">
          <div class="imgbox">
            <img :src="item.imgurl" alt />
          </div>
          <div class="rightbox">
            <p class="name">{{item.name}}</p>
            <p class="time">{{item.time}}</p>
            <van-button
              icon="like-o"
              class="guanzhu"
              :color="item.color"
              size="small"
              @click="btn(item)"
            >关注</van-button>
          </div>
        </div>
        <div class="botbox">
          <p>{{tit}}{{item.text}}</p>
          <img :src="item.imgurl" alt />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    btn(item) {
      // console.log(this.imglist);
      Toast("关注成功");
      // console.log(item.btnbool);
      item.btnbool = !item.btnbool;
      // console.log(item.btnbool);
      // console.log(item.color);
      if (item.btnbool) {
        item.color = "linear-gradient(to right, #4bb0ff, #6149f6)";
         Toast("取关成功");
      } else {
        item.color = "linear-gradient(to right, aqua, yellow)";
      }
    }
  },
  props: ["tit", "imglist"]
};
</script>

<style lang="scss" scoped>
.combot {
  li {
    border-top: 10px solid #ccc;
    padding: 15px;
    .topbox {
      position: relative;
      .imgbox {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        img {
          width: 150%;
          height: 100%;
        }
      }
      .rightbox {
        margin-left: 15px;
        float: left;
        width: 60%;
        p {
          margin: 0;
        }
        .name {
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .time {
          color: #888;
        }
        .guanzhu {
          position: absolute;
          right: 10px;
          top: 0px;
          bottom: 0px;
          margin: auto;
        }
      }
    }
    .botbox {
      margin-top: 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
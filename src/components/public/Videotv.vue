<template>
  <div>
    <!-- 标题 -->
    <van-sticky @scroll="scrollbox">
      <van-nav-bar v-show="!bool" class="titbox" left-arrow @click-left="frombtn" />
      <van-nav-bar v-show="bool" left-arrow :title="tit" @click-left="frombtn" />
    </van-sticky>
    <!-- 视频 -->
    <iframe
      class="video_iframe"
      style=" z-index:1; "
      :src="videosrc"
      allowfullscreen
      frameborder="0"
    ></iframe>

    <!-- 简介 -->
    <div class="box clearfix">
      <div class="fl imgbox">
        <img :src="titimg" />
      </div>
      <div class="textbox">
        <h1>{{tit}}</h1>
        <p>{{details}}</p>
        <van-button
          class="collect"
          icon="star-o"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          type="primary"
          @click="collect"
          size="small"
          v-show="videobool"
        >收藏</van-button>
        <van-button
          class="collect"
          icon="star-o"
          color="linear-gradient(to right, aqua, yellowgreen)"
          type="primary"
          @click="dellect"
          size="small"
          v-show="!videobool"
        >取消</van-button>
      </div>
    </div>

    <!-- 相关推荐 -->
    <div class="swipebox">
      <h2>相关推荐</h2>
      <swiper :images="imges"></swiper>
    </div>

    <!-- 评论区 -->
    <div class="comtop clearfix">
      <div class="fl">全部评论</div>
      <div class="fr">共{{pinlun.length}}条</div>
    </div>
    <!-- 评论区内容 -->
    <comment :tit="tit" :imglist="pinlun"></comment>
    <!-- 评论框 -->
    <div class="comment">
      <img src alt />
      <van-field
        v-model="message"
        rows="1"
        left-icon="chat-o"
        autosize
        type="textarea"
        right-icon="comment-o"
        @click-right-icon="aa"
        placeholder="快来评论吧~"
      />
    </div>
    <div class="hei"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from "vant";
import swiper from "./Swiper";
import comment from "./Comment";
export default {
  data() {
    return {
      bool: false,
      videobool: true,
      message: "",
      videosrc: "",
      tit: "",
      titimg: "",
      details: "",
      imges: "",
      fromtype: ""
    };
  },
  components: {
    swiper,
    comment
  },
  methods: {
    ...mapMutations({
      likevideo: "Main_store/likevideo",
      delvideo: "Main_store/delvideo"
    }),
    scrollbox() {
      if (document.documentElement.scrollTop >= 300) {
        this.bool = true;
      } else {
        this.bool = false;
      }
    },
    collect() {
      let _this = this;
       if(!this.$store.state.mybool2){
          Toast({message:'请优先登录哦~~亲',onOpened(){
             _this.$router.push({name:'我的'})
          }})
          return;
        }
      Toast("收藏成功");
      let aa = {
        img: JSON.parse(JSON.stringify(this.titimg)),
        name: JSON.parse(JSON.stringify(this.tit)),
        tit: JSON.parse(JSON.stringify(this.details))
      };
      this.likevideo(aa);
      this.videobool = false;
      // console.log(this.myvideolist);
    },
    dellect() {
      Toast("取消成功");
      this.videobool = true;
      this.delvideo();
      // console.log(this.myvideolist);
    },
    frombtn() {
      // console.log(this.$route.query);
      if (this.$route.query.from == 1) {
        this.$router.push({ name: "首页" });
      }
    },
    aa() {
      // console.log(this.message);
      Toast("待完善哦~~亲");
      this.message = "";
    }
  },
  computed: {
    ...mapState("publicapi", {
      videos: "videolist",
      videos2: "videolist2",
      videos3: "videolist3",
      videos4: "videolist4",
      pinlun: "pinlun"
    }),
    ...mapState("Main_store", {
      myvideolist: "myvideolist"
    })
  },
  created() {
    document.documentElement.scrollTop = 0;
    // console.log(this.$route)
    if (this.$route.query.type == 1) {
      this.imges = this.videos;
      this.videos.forEach(v => {
        if (this.$route.query.name == v.name) {
          this.videosrc = v.video;
          this.tit = v.name;
          this.titimg = v.titimg;
          this.details = v.details;
        }
      });
    } else if (this.$route.query.type == 2) {
      this.imges = this.videos2;
      this.videos2.forEach(v => {
        if (this.$route.query.name == v.name) {
          this.videosrc = v.video;
          this.tit = v.name;
          this.titimg = v.titimg;
          this.details = v.details;
        }
      });
    } else if (this.$route.query.type == 3) {
      this.imges = this.videos3;
      this.videos3.forEach(v => {
        if (this.$route.query.name == v.name) {
          this.videosrc = v.video;
          this.tit = v.name;
          this.titimg = v.titimg;
          this.details = v.details;
        }
      });
    } else if (this.$route.query.type == 4) {
      this.imges = this.videos4;
      this.videos4.forEach(v => {
        if (this.$route.query.name == v.name) {
          this.videosrc = v.video;
          this.tit = v.name;
          this.titimg = v.titimg;
          this.details = v.details;
        }
      });
    }
  }
};
</script>

<style lang="scss" >
body {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  opacity: 0;
}
.clearfix {
  zoom: 1;
}
.video_iframe {
  width: 100%;
  height: 300px;
}
.titbox {
  position: absolute;
  background-color: transparent;
}
.box {
  padding: 10px;
  .imgbox {
    width: 35%;
    img {
      width: 100%;
    }
  }
  .textbox {
    margin-left: 35%;
    width: 65%;
    position: relative;
    h1 {
      margin: 10px 0;
      text-align: center;
    }
    p {
      margin: 0;
      padding-left: 5px;
      box-sizing: border-box;
      text-indent: 2em;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .collect {
      position: absolute;
      width: 60%;
      font-size: 16px;
      left: 0;
      right: 0;
      margin: 10px auto;
    }
  }
}
.swipebox {
  padding: 0 10px;
  margin: 10px auto;
}
.comtop {
  padding: 5px 15px;
  .fl {
    font-weight: 700;
    font-size: 14px;
  }
  .fr {
    font-size: 12px;
    color: #888;
    font-size: 12px;
  }
}

.comment {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 100;
}
.hei {
  height: 50px;
}
</style>
<template>
  <div>
    <!-- 搜索框 -->
    <van-sticky @scroll="search">
      <div class="searchBox" ref="box">
        <van-row>
          <van-col class="logo" span="3">
            <img src="../../assets/img/logo.png" alt />
          </van-col>
          <van-col span="18">
            <van-search class="search" placeholder="请输入搜索关键词" />
          </van-col>
          <van-col class="logo logo2" span="3">
            <img src="../../assets/img/logo.png" alt />
          </van-col>
        </van-row>
      </div>
    </van-sticky>
    <!-- 轮播图 -->
    <div class="box">
      <timeswiper :images="images"></timeswiper>
    </div>
    <!-- 标签 -->
    <van-grid class="big" :border="false">
      <van-grid-item
        class="iconbox"
        v-for="(item,index) in lists"
        :key="index"
        :icon="item.icon"
        :text="item.name"
      />
    </van-grid>
    <!-- 竖行轮播图 -->
    <van-swipe class="heiswiper clearfix" :autoplay="2000" vertical indicator-color="transparent">
      <van-swipe-item class="dd" v-for="(item,index) in radio" :key="index">
        <div class="fl"></div>
        <p>{{item.name}}</p>
        <span>{{item.text}}</span>
      </van-swipe-item>
    </van-swipe>
    <!-- 视频数据   猜你喜欢-->
    <div class="videoBox clearfix">
      <div class="top clearfix">
        <div class="fl">猜你喜欢</div>
        <div class="fr">
          查看更多
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="video" v-for="(item,index) in videos" :key="index" @click="gotv(item)">
        <div class="videoimg">
          <img :src="item.img" />
        </div>
        <p>{{item.name}}</p>
        <p>{{item.text}}</p>
      </div>
    </div>
    <!-- 日漫 -->
    <div class="videoBox clearfix">
      <div class="top clearfix">
        <div class="fl">日漫</div>
        <div class="fr">
          查看更多
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="video" v-for="(item,index) in videos2" :key="index" @click="gotv(item)">
        <div class="videoimg">
          <img :src="item.img" />
        </div>
        <p>{{item.name}}</p>
        <p>{{item.text}}</p>
      </div>
    </div>
    <!-- 国漫 -->
    <div class="videoBox clearfix">
      <div class="top clearfix">
        <div class="fl">国漫</div>
        <div class="fr">
          查看更多
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="video" v-for="(item,index) in videos3" :key="index" @click="gotv(item)">
        <div class="videoimg">
          <img :src="item.img" />
        </div>
        <p>{{item.name}}</p>
        <p>{{item.text}}</p>
      </div>
    </div>
    <!-- 强烈推荐 -->
    <div class="videoBox clearfix">
      <div class="top clearfix">
        <div class="fl">强烈推荐</div>
        <div class="fr">
          查看更多
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="video" v-for="(item,index) in videos4" :key="index" @click="gotv(item)">
        <div class="videoimg">
          <img :src="item.img" />
        </div>
        <p>{{item.name}}</p>
        <p>{{item.text}}</p>
      </div>
    </div>

    <div class="hei"></div>
  </div>
</template>

<script>
import timeswiper from "../../components/public/Timeswiper";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lists: [
        { name: "番剧", icon: "browsing-history-o" },
        { name: "放映厅", icon: "video-o" },
        { name: "音乐", icon: "music-o" },
        { name: "会员购", icon: "vip-card-o" }
      ],
      radio: [
        {
          name: "好玩的",
          text: "好玩的冲冲冲冲，这里都有哦，欢迎来到鲸心影视"
        },
        { name: "好看的", text: "好看的冲，这里都有哦，欢迎来到鲸心影视" },
        { name: "好吃的", text: "好吃的冲冲，这里都有哦，欢迎来到鲸心影视" },
        { name: "好喝的", text: "好喝的冲冲冲，这里都有哦，欢迎来到鲸心影视" }
      ]
    };
  },
  methods: {
    search() {
      if (document.documentElement.scrollTop >= 50) {
        this.$refs.box.style.backgroundColor = "white";
        this.$refs.box.style.opacity ="0.8"
      } else {
        this.$refs.box.style.backgroundColor = "transparent";
      }
    },
    gotv(item) {
      // console.log(item);
      this.$router.push({
        name: "视频",
        query: { name: item.name, type: item.type ,from:1}
      });
    }
  },
  components: {
    //拼接组件  轮播图
    timeswiper
  },
  computed: {
    //调用全局数据  publicapi
    ...mapState("publicapi", {
      images: "timeswiper",
      videos: "videolist",
      videos2: "videolist2",
      videos3: "videolist3",
      videos4: "videolist4"
    })
  }
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 10px 5px;
  img {
    width: 100%;
    height: 100%;
  }
}
.logo2 {
  img {
    transform: rotateY(180deg);
  }
}
.search {
  background-color: transparent;
  border: none;
  padding: 14px 0px;
}
.box {
  height: 230px;
  border-radius: 0px 0px 190px 190px/100px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    
  }
}
.big {
  border-radius: 50px;
  overflow: hidden;
  margin-top: 10px;
  .iconbox {
    color: red;
    &:nth-child(2) {
      color: orange;
    }
    &:nth-child(3) {
      color: aqua;
    }
    &:nth-child(4) {
      color: #fcd800;
    }
  }
}
.heiswiper {
  margin-top: 10px;
  margin-left: 5%;
  width: 90%;
  height: 60px;
  background-color: transparent;
  .fl {
    width: 60px;
    height: 100%;
    background: url("../../assets/img/30.png") no-repeat;
    z-index: 100;
  }
  p {
    margin: 0 0 4px;
    font-size: 16px;
    font-weight: 600;
  }
  .dd:nth-child(2) {
    .fl {
      background: url("../../assets/img/31.png") no-repeat;
    }
  }
  .dd:nth-child(3) {
    .fl {
      background: url("../../assets/img/32.png") no-repeat;
    }
  }
  .dd:nth-child(4) {
    .fl {
      background: url("../../assets/img/33.png") no-repeat;
    }
  }
}
.videoBox {
  padding: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  .fl {
    font-size: 16px;
    font-weight: 700;
  }
  .fr {
    color: #bbb;
    font-size: 14px;
  }
  .video {
    float: left;
    margin: 2%;
    width: 46%;
    .videoimg {
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      &:nth-child(3) {
        font-weight: 400;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
<template>
  <div>
    <!-- 搜索框 -->
    <van-sticky>
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
    <ul class="leftbox">
      <li
        v-for="(item,index) in classlist"
        :key="index"
        :class="{active:item.isActive}"
        @click="btnActive(index)"
      >{{item.name}}</li>
    </ul>
    <div class="bigbox">
      <ul class="rightbox" ref="ul">
        <li v-for="(item,index1) in imglists" :key="index1" ref="ll">
          <div class="imgbox">
            <img :src="item.topimg" alt />
          </div>
          <div class="contbox" v-for="(item,index2) in item.botbox" :key="index2">
            <h2>{{item.tit}}</h2>
            <van-row gutter="20">
              <van-col
                class="shopbox"
                span="8"
                v-for="(item,index3) in item.imgs"
                :key="index3"
                @click="shopbox({item,index1,index2,index3})"
              >
                <img :src="item.img" alt />
                <p>{{item.name}}</p>
              </van-col>
            </van-row>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    btnActive(index) {
      // 遍历数组
      this.classlist.forEach(element => {
        if (element.isActive == true) {
          element.isActive = false;
        }
      });
      this.classlist[index].isActive = true;
      // console.log("sdss");
      this.$refs.ul.style.marginTop =
        -index * this.$refs.ll[0].offsetHeight + "px";
    },
    shopbox({item,index1,index2,index3}) {
      // console.log(item);
      this.$router.push({
        name: "商品",
        query: {
          name: item.name,
          img: item.img,
          index1:index1,
          index2:index2,
          index3:index3,
        }
      });
    }
  },
  computed: {
    ...mapState("Main_store", {
      classlist: "classlist",
      imglists: "imglists"
    })
  }
};
</script>

<style lang="scss" scoped>
.searchBox {
  background-color: rgba($color: #000000, $alpha: 0.6);
  height: 50px;
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
}
.leftbox {
  width: 25%;
  position: absolute;
  top: 50px;
  bottom: 50px;
  // margin: auto;
  height: auto;
  background-color: rgba($color: #000000, $alpha: 0.6);
  text-align: center;
  overflow-y: auto;
  li {
    height: 40px;
    line-height: 40px;
    color: white;
    position: relative;

    &.active {
      color: #aef8e2;
      font-weight: 700;
      &:after {
        content: " ";
        display: block;
        position: absolute;
        right: 0px;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 3px;
        height: 20px;
        background-color: #aef8e2;
      }
    }
  }
}
.bigbox {
  background-color: rgba($color: #000000, $alpha: 0.6);
  position: absolute;
  width: 75%;
  left: 25%;
  top: 50px;
  bottom: 50px;
  overflow: hidden;
  .rightbox {
    height: 100%;
    li {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 10px;
      .imgbox {
        width: 100%;
        border-radius: 10px;
        height: 100px;
        overflow: hidden;
        background-color: red;
        position: relative;
        img {
          width: 150%;
          position: absolute;
          left: -60px;
        }
      }
      .contbox {
        h2 {
          text-align: center;
          color: #ccc;
        }
        .shopbox {
          border-radius: 10px;
          img {
            width: 100%;
            background-color: rgba($color: #fff, $alpha: 0.6);
          }
          p {
            text-align: center;
            color: #ddd;
          }
        }
      }
    }
  }
}
</style>
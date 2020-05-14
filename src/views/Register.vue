<template>
  <div>
    <div class="bj">
      <van-nav-bar :title="$route.name" left-arrow @click-left="$router.go(-1)" />

      <div class="imgbox">
        <div class="hei">
          <img ref="bb" src="../assets/img/bb.png" alt />
          <img ref="mm" src="../assets/img/mm.png" alt />
        </div>
      </div>
      <van-form @submit="onsubmit">
        <van-field v-model="username" @focus="txtzh" label="账号" value="admin" name="username" />
        <van-field
          v-model="password"
          @focus="passwordmm"
          type="password"
          name="password"
          label="密码"
        />
        <van-field
          v-model="password2"
          @focus="passwordmm"
          type="password"
          name="password2"
          label="验证密码"
        />

        <div class="twobtn">
          <van-button class="fl van-col--24" type="default" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: function() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    onsubmit(params) {
      let _this = this;
      // 请求接口
      this.$axios.get("register", { params }).then(res => {
        if (res.data == "200") {
          Toast({
            message: "注册成功",
            // 提示后回调
            onOpened() {
              // 跳转路由
              _this.$router.push("/login");
            }
          });
        } else {
          Toast("注册失败");
        }
      });
    },
    txtzh() {
      // console.log(this.$refs.mm);
      this.$refs.mm.style.opacity = "1";
      this.$refs.bb.style.opacity = "0";
    },
    passwordmm() {
      // console.log(this.$refs.bb);
      this.$refs.mm.style.opacity = "0";
      this.$refs.bb.style.opacity = "1";
    }
  },
  created() {
    this.$store.state.showbool = false;
  },
  destroyed() {
    this.$store.state.showbool = true;
  }
};
</script>

<style lang="scss" scoped>
.bj {
  width: 100%;
  background-color: #f4f4f4;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.van-nav-bar {
  background-color: #e9799b;
  .van-nav-bar__title {
    font-size: 20px;
    color: #f9f6f7;
  }
}
.van-nav-bar .van-icon {
  font-size: 20px;
  color: #f9f6f7;
}
.hei {
    height:90px;
  position: relative;
  img {
    position: absolute;

    width: 100%;
  }
}
.twobtn {
  padding: 20px;
  margin-top: 20px;
}
</style>
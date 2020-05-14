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
      <van-field v-model="username" @focus="txtzh" label="账号" name="username" value="admin" />
      <van-field
        v-model="password"
        @focus="passwordmm"
        type="password"
        label="密码"
        name="password"
        value="123456"
      />

      <div class="twobtn">
        <van-button class="fl van-col--10" type="default" to="/register">注册</van-button>
        <van-button class="fr van-col--10" color="#efafc0" native-type="submit">登录</van-button>
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
      password: ""
    };
  },
  methods: {
    onsubmit(params) {
      let _this = this;
      // console.log(this.$route)
      let path = "/my";
      if ("path" in _this.$route.query) {
        path = _this.$route.query.path;
        // console.log(_this.$route.query);
      }

      this.$axios.get("login", { params }).then(res => {
        if (res.data == "200") {
          _this.$store.state.mybool= false;
          _this.$store.state.mybool2= true;
          Toast({
            message: "登录成功",
            onOpened() {
              _this.$store.state.username = _this.username;
              _this.$router.push(path);
            }
          });
        } else {
          Toast("登录失败");
        }
      });
    },
    txtzh() {
      this.$refs.mm.style.opacity = "1";
      this.$refs.bb.style.opacity = "0";
    },
    passwordmm() {
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
  button{
      margin-left: 20px ;
  }
}
</style>
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar :title="$route.name" />
    <!-- 导航栏end -->

    <!-- 地址列表 -->
    <van-address-list v-model="acct" :list="list" @add="onAdd" @edit="onEdit" @select="goOrder" />
    <!-- 地址列表end -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      acct:0
    };
  },
  methods: {
    goOrder(index) {
      // console.log(this.addids);
      this.addiddemo(index);
      // console.log("sdkf",this.contentbool);
      if (this.addressbool) {
        this.content_sel();
        this.conlistdemo(index);
        this.base_true();
        this.$router.push({
          name: "订单"
        });
      } else {
        this.$router.push({ name: "我的" });
      }
    },
    onAdd() {
      this.$router.push({ name: "新增地址" });
    },
    onEdit(item, index) {
      // console.log(item, index);
      this.active_true();
      this.$router.push({
        name: "新增地址",
        query: { index: index }
      });
    },
    ...mapMutations({
      active_true: "publicapi/active_true",
      content_sel: "Main_store/content_sel",
      conlistdemo: "Main_store/conlistdemo",
      base_true: "Main_store/base_true",
      addiddemo: "Main_store/addiddemo"
    })
  },
  computed: {
    ...mapState("publicapi", {
      list: "addresslist"
    }),
    ...mapState("Main_store", {
      contentbool: "contentbool",
      contentlist: "contentlist",
      addressbool: "addressbool",
      addids: "addid"
    })
  },
  created(){
    // this.acct = this.addids
  }
};
</script>

<style lang="scss" scoped>
</style>
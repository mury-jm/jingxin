<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar :title="$route.name" />
    <!-- 导航栏end -->

    <!--   填写内容 -->
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="addressbool"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete() && addressbool"
    />
    <!--   填写内容end -->
  </div>
</template>

<script>
import areaList from "../../assets/js/arealist";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: []
    };
  },
  methods: {
    onSave(content) {
      // console.log(content);
      // console.log(this.addresslist);
      // console.log(this.addressbool)
      if(!this.addressbool){
         this.addresslist.push({
        id: this.addresslist.length,
        name: content.name,
        tel: content.tel,
        areaCode:content.areaCode,
        addressDetail:content.addressDetail,
        address:
          content.province == content.city
            ? content.province + content.county + content.addressDetail
            : content.province +
              content.city +
              content.county +
              content.addressDetail,
      });
      }else{
          // console.log(content.id)
          this.addresslist[content.id] = content;
          this.active_false();
      }
     
      this.$router.push({ name: "地址列表" });
    },
    onDelete() {
      // console.log('asfsdfsdf');
      // this.orderlist[this.$route.query.index]
      this.addresslist.splice(this.$route.query.index,1);
      // console.log(this.addresslist)
      this.$router.push({name:'地址列表'})
      this.active_false();
    },
    ...mapMutations({
      active_false:'publicapi/active_false'
    })
  },
  computed: {
    ...mapState("publicapi", {
      addresslist: "addresslist",
      addressbool:"addressbool"
    })
  },
  created() {
    // console.log(this.addresslist);
    this.addressInfo = this.addresslist[this.$route.query.index];
  },
  destroyed(){
    
  }
};
</script>

<style lang="scss" scoped>
</style>
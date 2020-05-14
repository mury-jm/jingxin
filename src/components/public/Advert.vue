<template>
    <div>
        <div class="bjbox"></div>
        <h1>{{num}}</h1>
        <van-button class="gobtn" @click="goindex" size="small">跳过</van-button>
        <img :src="require('../../assets/img/1.png')" class="animated fadeInUpBig">
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                num:3,
                cleardata:null //清除定时器
            }
        },
        methods:{
            goindex(){
                this.$router.push('/main/home')
            }
        },
        created() {
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    this.$router.push('/main/home');
                }else{
                this.num--;
                }
            },1000)
            this.$store.state.showbool = false;
        },
        beforeDestroy(){ // 销毁生命周期函数之前停止
            clearInterval(this.cleardata);
        },
        destroyed(){
            this.$store.state.showbool = true;
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font-size: 20px;
        position: absolute;
        z-index: 100;
        top: 10px;
        left:10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        background-color: rgba($color: white, $alpha: 0.5);
    }
    .bjbox{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: -1;
        background: linear-gradient(to left, #02010f,#00024d);
    }
    img{
        margin-top: 80px;
        width: 100%;
        height: 100%;
    }
    p{
        font-size: 1.5rem;
        text-align: center;
        color: #fed0c2;
        font-weight: 600;
    }
    .gobtn{
        position: absolute;
        z-index: 100;
        right: 1rem;
        top: 1rem;
        border: none;
        background-color: rgba($color: #fed0c2, $alpha: .3);
    }
</style>
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// rem 适配
import 'lib-flexible'

// vant 框架引用
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

// 解决重复点击路由报错
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 引入 swiper 轮播图组件
import 'swiper/css/swiper.css'

//视频插件
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// import 'videojs-flash'
// import 'videojs-contrib-hls'
// Vue.use(VideoPlayer)
import axios from "axios";
axios.defaults.baseURL = '/';
Vue.prototype.$axios = axios;

//动画第三方样式
import 'animate.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

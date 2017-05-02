import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './config/routes'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
  
Vue.config.productionTip = false

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
}

// 引入自己封装的跨域请求代码，不需要请注释掉
// function Jsonp(url,h){this.data='';var s=document.createElement("script");s.src=url;document.head.appendChild(s);callback=function(d,f){this.data=d;h(this.data)}}
// 用法		注意，回掉函数名一定要改成callback
//var jsonp = new Jsonp("https://sug.so.360.cn/suggest?callback=callback&word=a", function(data){
//    console.log(data.s);
//});

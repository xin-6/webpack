// 引入父级组件
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'

// 引入子组件配置文件


// 引入子组件


// 路由接口
export default [
    {   //登陆页路由配置
        path:'/',
        redirect: '/login',     //登陆页路由从定向 
    },
    {   
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home
    },
    // {
    //     path:'/system',
    //     component:sys,
    //     children:[
    //         {
    //             path:'/',
    //             component:addequipmentmap
    //         },
    //     ]
    // },
]

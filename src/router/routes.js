export const routes =[
    
    {//主页  一级路由
        path:'/main',
        name:'Main',
        component: () => import('../views/Main'),
        children:[
            {
                path:'home',
                name:'首页',
                component: () => import('../views/Mainchidren/Home')
            },
            {
                path:'classify',
                name:'分类',
                component: () => import('../views/Mainchidren/Classify')
            },
            {
                path:'dynamic',
                name:'花动态',
                component: () => import('../views/Mainchidren/Dynamic')
            },
            {
                path:'shopcart',
                name:'购物车',
                component: () => import('../views/Mainchidren/Shopcart')
            },
            {
                path:'my',
                name:'我的',
                component: () => import('../views/Mainchidren/My')
            },
        ]
    },
    {//注册页
        path:'/register',
        name:'注册',
        component: () => import('../views/Register')
    },
    {//登录页
        path:'/login',
        name:'登录',
        component: () => import('../views/Login')
    },
    {//视频详情页
        path:'/mp4',
        name:'视频',
        component:() => import('../components/public/Videotv')
    },
    {//商品详情页
        path:'/shoptext',
        name:'商品',
        component:()=> import('../components/public/Shoptext'),
        
    },
    {//订单详情页
        path:'/orderlist',
        name:'订单',
        component:() => import('../components/my/Orderlist'),
        beforeRouteLeave (to, from, next) {
            // console.log(to,from)
            next();
        }
    },
    {//添加地址
        path:'/Address',
        name:'地址列表',
        component:() => import('../components/my/Address'),
    },
    {//新增地址
        path:'/Addressdata',
        name:'新增地址',
        component:()=> import('../components/my/Address_data')
    },
    {
        path:'/All',
        name:'全部',
        component:()=> import('../components/my/All'),
        children:[
            {
                path:'allorder',
                name:'全部订单',
                component:() => import('../components/my/Allorder')
            },
            {
                path:'nook',
                name:'待付款',
                component:()=> import('../components/my/Nook')
            },
            {
                path:'nogoods',
                name:'待发货',
                component:()=> import('../components/my/Nogoods')
            },
            {
                path:'noeval',
                name:'待评价',
                component:()=> import('../components/my/Noeval')
            },
        ]
    },
    {// 商品收藏
        path:'/mylike',
        name:"我的商品收藏",
        component:()=> import('../components/my/Mylike')
    },
    {
        path:'/myvideo',
        name:'我的视频收藏',
        component: () => import('../components/my/Myvideo')
    },
    {//引导页
        path:'/bootpage',
        name:'引导页',
        component:() => import('../components/public/Bootpage')
    },
    {//广告页
        path:'/advert',
        name:'广告页',
        component:() => import('../components/public/Advert'),
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('bootpage')){
                next();
            }else{
                localStorage.setItem('bootpage' , true)
                next({name:'引导页'})
            }}
    },
    {//路由重定义
        path:'*',
        redirect:{name:'首页'}
    }
]
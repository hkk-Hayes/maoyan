import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/home/MovieView'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: MovieView,
    children:[
     { "path":'/home',redirect:'/home/reying'},
     { path: 'reying',
        name: 'reying',
     component: () => import(/* webpackChunkName: "about" */ '../views/home/ReYing.vue')},
     { path: 'daiying',
       name: 'daiying',
      component: () => import(/* webpackChunkName: "about" */ '../views/home/DaiYing.vue')},
  { path: 'yingyuan',
        name: 'yingyuan',
     component: () => import(/* webpackChunkName: "about" */ '../views/home/YingYuan.vue')},
     { path: 'jingdian',
     name: 'jingdian',
  component: () => import(/* webpackChunkName: "about" */ '../views/home/JingDian.vue')},
    ]
  },
  {
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoView.vue'),
    children:[
      { "path":'/video',redirect:'/video/rev'},
     {path:'rev',name:'rev',
      component: () => import(/* webpackChunkName: "about" */ '../views/videopage/vTui.vue')
    } ,
    {path:'suv',name:'suv',
     component: () => import(/* webpackChunkName: "about" */ '../views/videopage/vSu.vue')
   } ,
   {path:'duv',name:'duv',
    component: () => import(/* webpackChunkName: "about" */ '../views/videopage/vDU.vue')
  } ,
  {path:'yuv',name:'yuv',
   component: () => import(/* webpackChunkName: "about" */ '../views/videopage/vYu.vue')
 } 
    ]
  },
  {
    path: '/shortvideo',
    name: 'shortvideo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShortVideoView.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowView.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import(/* webpackChunkName: "about" */ '../views/MeView.vue')
  },
  {
    //动态路由
    path:'/item/:id',
    name:'item',
    meta: {
      clearHeaderFooter: true
    },
    component: () => import(/* webpackChunkName: "item" */ '../views/home/hotListitem.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "item" */ '../views/login/logIn.vue')
  },
  {
    path:'/cityList',
    name:'cityList',
    component: () => import(/* webpackChunkName: "item" */ '../views/cityList')
  },{
    path:'/mydetil',
    name:'mydetil',
    component: () => import(/* webpackChunkName: "mydetil" */ '../views/login/myDetil.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/logIn.vue')
  },
  {
    path: "/*",
    name: "page404",
    component: () => import(/* webpackChunkName: "page404" */ '../views/PageView404.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log("路由守卫运行了");
  if (to.path == "/mydetil") {//用户中心守卫
    if (localStorage.getItem('user')) {//登录了
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})
export default router

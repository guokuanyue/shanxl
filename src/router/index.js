import Vue from 'vue';
import Router from 'vue-router';

//这样引入按需加载
const Home = ()=>import('../components/home/Home.vue');
const News = ()=>import('../components/news/news.vue');
const Activies =()=>import('../components/activities/activities.vue');
const Chat =()=>import('../components/chat/chat.vue');
const Customer =()=>import('../components/customer/customer.vue');
const Order =()=>import('../components/orders/order.vue');
const Personal=()=>import('../components/personal/personal.vue');
const Login =()=>import('../components/login/login.vue');

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'entry',
      redirect: { name: 'login' }
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      redirect:{ name :'news'},
      children:[
        {
          path:'news',
          name:'news',
          component:News
        },
        {
          path:'activies',
          name:'activies',
          component:Activies
        },
        {
          path:'chat',
          name:'chat',
          component:Chat
        },
        {
          path:'customer',
          name:'customer',
          component:Customer
        },
        {
          path:'order',
          name:'order',
          component:Order
        },
        {
          path:'personal',
          name:'personal',
          component:Personal
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

//路由全局钩子 
route.beforeEach(async (to, from, next) => {
  let userinfo = await localStorage.getItem('user');
  if(userinfo){
    next();
  }else{
    //注意加个判断否则陷入死循环
    if(to.path=='/login'){//如果是登录页面路径，就直接next()
      next();
    }else{//不然就跳转到登录；
      next({name:'login'});  //next('/login');next({path:'/login'}) 三种写法
    }
  }
});

export default route

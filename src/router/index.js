import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import mainPage1 from '@/components/mainPage1'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/mainPage1',
      name: 'mainPage1',
      component: mainPage1
    }
  ]
})

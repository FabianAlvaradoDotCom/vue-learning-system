import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import store from './store/store';

//Layout components
  import Header from './layout/HeaderComponent.vue';
  import Navigation from './layout/NavigationComponent.vue';
  import Content from './layout/ContentComponent.vue';
  import Footer from './layout/FooterComponent.vue';
  Vue.component('header-component', Header);
  Vue.component('navigation-component', Navigation);
  Vue.component('content-component', Content);
  Vue.component('footer-component', Footer);

// Importing custom routes
  import { routes } from './routes';
// Setting up router
  Vue.use(VueRouter);
  const router = new VueRouter({
    mode: 'history',
    routes
  });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

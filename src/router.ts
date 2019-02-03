import Vue from 'vue';
import Router from 'vue-router';
import LaughPageComponent from './views/laugh-page/laugh-page.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/makelaugh',
      name: 'makelaugh',
      component: LaughPageComponent,
    },
    {
      path: '/laugh',
      name: 'laugh',
      component: LaughPageComponent,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: LaughPageComponent,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import LaughPageComponent from './views/laugh-page/laugh-page.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
router.replace({ path: '/makelaugh', name: 'makelaugh' });
// exportしないと読めないぞ
export default router;

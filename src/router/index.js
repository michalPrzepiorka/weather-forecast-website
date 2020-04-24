import Vue from 'vue';
import VueRouter from 'vue-router';
import Weather from '@/components/Weather.vue';
import Stats from '@/components/Stats.vue';
import Test from '@/components/Test.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  },
  {
    path: '/',
    name: 'Test',
    component: Test,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

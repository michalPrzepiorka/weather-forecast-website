import Vue from 'vue';
import VueRouter from 'vue-router';
import Weather from '@/components/Weather.vue';
import Stats from '@/components/Stats.vue';
import WeatherListAndMap from '@/components/WeatherListAndMap.vue';

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
    name: 'FrontPage',
    component: WeatherListAndMap,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;

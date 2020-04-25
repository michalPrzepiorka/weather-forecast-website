<template>
    <v-app>
        <Navbar/>
        <WeatherListAndMap/>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import WeatherListAndMap from '@/components/WeatherListAndMap.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    WeatherListAndMap,
  },
  data() {
    return {};
  },
};
</script>

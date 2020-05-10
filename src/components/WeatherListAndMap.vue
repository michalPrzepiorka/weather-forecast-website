<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            <virtual-list style="width: 100%;"
            :data-key="'cityName'"
            :data-sources="results"
            :data-component="weather"
            />
        </div>
    </div>
    <div class="col-md-6 no-gutters">
        <div class="right-side d-flex">
            <div id="windy"></div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import VirtualList from 'vue-virtual-scroll-list';
import Weather from './Weather.vue';

const API = 'http://localhost:8090';

export default {
  name: 'App',
  components: {
    'virtual-list': VirtualList,
  },

  data() {
    return {
      weather: Weather,
      results: [],
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      axios.get(`${API}/temp`,
        {
          headers: {
            'Content-Type': 'applicatioon/json',
          },
        }).then((response) => {
        this.results = response.data;
      })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
    .left-side{
        width: 100%;
        background: white;
    }
    .right-side{
        position: fixed;
        height: 90vh;
        width: 50%;
    }

    @media screen and (max-width: 1024px){
        .left-side {
            // cos
            height: 100%;
        }
        .right-side {
            position: relative;
            width: 100%;
            height: 50vh;
        }
    }

    .list-of-weather-items{
        background: white;
        margin-top: 10px;
        list-style: none;
    }

    #windy {
        height: 100%;
        width: 100%;
    }

</style>

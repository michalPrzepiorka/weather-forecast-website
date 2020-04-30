<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            <ul class="list-of-weather-items">
                <li v-for="item in results" :key="item.id">
                    <p>{{item.cityName}} {{item.temperature}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-md-6 no-gutters">
        <div class="right-side d-flex">
            Map goes here
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

const API = 'http://localhost:8090';

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      weather: '',
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
    .left-side, .right-side{
        height: 50vh;
        width: 100%;
    }

    @media screen and (min-width: 768px){
        .left-side, .right-side{
            height: 100vh;
        }
    }
    .left-side{
        background: white;
    }

    .right-side{
        background: grey;
    }

    .list-of-weather-items{
        background: white;
        margin-top: 10px;
        list-style: none;
    }

</style>

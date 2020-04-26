<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            <Button class="primary" @click="fetchWeather">Update</Button>
            <ul class="list-of-weather-items">
                <label>
                    <input v-model="weather" @input="fetchWeather"/>
                </label>
                <li v-for="item in results" :key="item.id">
                    <p>{{item.cityName}} {{item.temperature}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-md-6 no-gutters">
        <div class="right-side d-flex">
            RIGHT TEST
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
  methods: {
    fetchWeather() {
      axios.get(`${API}/temp`,
        {
          headers: {
            'Content-Type': 'applicatioon/json',
          },
        }).then((response) => {
        this.results = response.data;
        console.log(response.data);
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
        padding: 20px;
        margin-bottom: 10px;
        list-style: none;
    }

</style>

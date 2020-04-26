<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            <ul>
                <li v-for="weatherForecast in weather" :key="weatherForecast.id">
                    <label>
                        <input v-model="weather" @input="fetchWeather"/>
                    </label>
                </li>
                <Button class="primary" @click="fetchWeather">Update</Button>
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
        console.log(response);
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

    .weatherForecast{
        background: #eee;
        padding: 20px;
        margin-bottom: 10px;
        list-style: none;
    }

</style>

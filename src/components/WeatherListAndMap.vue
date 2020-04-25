<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            <ul>
                <li v-for="weatherForecast in weather" :key="weatherForecast.id">
                    <p>{{ weatherForecast.city }}</p>
                    <p>{{ weatherForecast.temperature }}</p>
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
export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      weather: [
        {
          id: 1,
          city: 'Kraków',
          temperature: '23',
        },
        {
          id: 2,
          city: 'Lublin',
          temperature: '18',
        },
        {
          id: 3,
          city: 'Warszawa',
          temperature: '16',
        },
      ],
    };
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

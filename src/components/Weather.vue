<template>
    <div>
        <p>{{source.cityName}} {{source.temperature}}</p>
    </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    index: {
      type: Number,
    },
    source: { // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log('Loaded weather comp');
  },
};
</script>

<style scoped>

</style>

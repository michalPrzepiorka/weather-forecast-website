<template>
<div class="row no-gutters">
    <div class="col-md-6 no-gutters">
        <div class="left-side d-flex">
            LEFT TEST
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

  data: () => ({
    //
  }),
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
        background: lightgrey;
    }

    .right-side{
        background: grey;
    }

</style>

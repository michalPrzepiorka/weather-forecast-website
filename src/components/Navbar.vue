<template>
    <v-app-bar
            app
            color="#f7f7f7"
    >
        <router-link to="/">
            <v-img max-width="200px" :src="require('@/assets/pogoda.png')"/>
        </router-link>
        <v-divider
                class="mx-4"
                vertical
        />
        <router-link class="menu-router" to="/weather">
            <v-label class="menu-label">
                <span id="nav-content">Pogoda</span>
            </v-label>
        </router-link>
        <v-divider
                class="mx-4"
                vertical
        />
        <router-link class="menu-router" to="/stats">
            <v-label class="menu-label">
                <span id="nav-content">Wykresy</span>
            </v-label>
        </router-link>

        <v-spacer></v-spacer>
        <div class="icon-list">
            <v-icon aria-hidden="false">fas fa-list</v-icon>
        </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
    .menu-router {
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
        display: none;
    }

    .v-divider{
        display: none;
    }

    #nav-content {
        font-size: 17px;
        color: #4854FD;
        font-family: Arial, serif;
    }

    .icon-list{
        display: block;
    }
    @media screen and (min-width: 768px){
        .icon-list{
            display: none;
        }

        .menu-router{
            text-align: center;
            position: relative;
            display: block;
        }

        .v-divider{
            display: block;
        }
    }
</style>

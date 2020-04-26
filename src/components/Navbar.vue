<template>
    <v-app>
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

            <v-btn
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
                    text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
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
<style lang="scss" scoped>
    .menu-router {
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
    }
    #nav-content{
        font-size: 17px;
        color: #4854FD;
        font-family: Arial,serif;
    }
</style>

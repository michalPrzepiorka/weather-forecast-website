<template>
    <v-app>
        <Navbar/>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer height="auto" color="#343a40" dark>
            <v-layout justify-center row wrap>
                <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
                    <strong class="footer-title">Pogoda</strong>
                    <v-divider
                            class="flex"
                            horizontal
                    />
                    <p class="footer-info">More info here later</p>
                </v-flex>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
    .footer-title{
        font-size: 20px;
    }

    .footer-info{
        margin-top: 10px;
        font-size: small;
    }

    #windy {
        height: 300px;
    }
</style>

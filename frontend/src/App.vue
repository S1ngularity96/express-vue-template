<template>
  <v-app>
    <snack-bar></snack-bar>
    <v-app-bar app dense>
      <v-toolbar-title>{{ translatedRouteName }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <Navigation></Navigation>
    <v-main>
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>

    <v-footer dark padless app>
      <v-card class="flex" flat tile color="#323fa3">
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Boilerplate App</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "components/Utils/NavBar";
import Snackbar from "components/Utils/Snackbar";
export default {
  sockets: {},
  components: {
    "snack-bar": Snackbar,
    Navigation,
  },
  data: () => ({}),
  computed: {
    translatedRouteName() {
      return "Boilerplate Page";
    },
  },
  created() {
    if (this.$cookies.isKey("lang")) {
      this.$i18n.locale = this.$cookies.get("lang");
    }
  },
  async mounted() {},
  methods: {},
};
</script>



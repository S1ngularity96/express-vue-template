<template>
  <v-snackbar
    class="snackbar"
    v-model="snackbar"
    :timeout="countdown"
    :top="true"
    :color="type"
    
    absolute
    
  >
    <span v-html="message"></span>
    <template v-slot:action="{attrs}">
      <v-btn text v-bind="attrs" @click="close()">Close</v-btn>
    </template> 
    
  </v-snackbar>
</template>

<script>
export default {
  data: () => {
    return {
      countdown: 5000,
    };
  },
  methods: {
    close() {
      this.$store.commit("closeSnackbar");
    },
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.state.displaySnackbar;
      },
      set(value) {
        this.$store.commit("closeSnackbar", value);
      },
    },
    message() {
      return this.$store.getters.snackbarMessage;
    },
    type() {
      if (this.$store.getters.snackbarType === "success") {
        return "success";
      } else if (this.$store.getters.snackbarType === "error") {
        return "error";
      } else if (this.$store.getters.snackbarType === "info") {
        return "info";
      }
      return "info";
    },
  },
};
</script>


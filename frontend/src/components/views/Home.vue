<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <p>{{ text }}</p>
      </v-col>
      <v-col cols="6">
        <p>{{ time }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  sockets: {
    "/time": function (timeString) {
      this.time = timeString;
    },
  },
  data() {
    return {
      time: "Wait for Servertime ...",
      text: "Wait for Serverresponse ...",
    };
  },
  methods: {
    async getText() {
      try {
        let res = await this.$axiosx.get("/api/home");
        this.text = res.data.message;
      } catch (err) {
        this.$snackbar.errorhandle(err);
      }
    },
  },
  async mounted(){
      this.getText();
  }
};
</script>

<style>
</style>
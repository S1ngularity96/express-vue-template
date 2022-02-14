<template>
  <v-navigation-drawer app>
    <v-list nav>
      <template v-for="item in navbar">
        <v-list-group
          v-if="hasGroup(item.Group)"
          :key="item.Title"
          :prepend-icon="item.Icon"
          no-action
          eager
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.Title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="groupitem in item.Group"
            :key="groupitem.Title"
            :to="groupitem.To"
            @click="groupitem.Click"
          >
            <v-list-item-icon>
              <v-icon>{{ groupitem.Icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ groupitem.Title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :to="item.To" :key="item.Title" @click="item.Click">
          <v-list-item-icon>
            <v-icon>{{ item.Icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.Title }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["value", "theme"],
  data() {
    return {
      navbar: [],
    };
  },
  computed: {},
  methods: {
    hasGroup(group) {
      return typeof group !== "undefined";
    },
  },
  created() {
    this.navbar = [
      {
        Title: this.$t("Nav.Dashboard"),
        Icon: "mdi-view-dashboard",
        To: "/",
        Click: () => {},
      },
      {
        Title: this.$t("Nav.Network"),
        Icon: "mdi-network",
        To: "/network",
        Click: () => {},
      },
      {
        Title: this.$t("Nav.Settings"),
        Icon: "mdi-cog",
        To: "/settings",
        Click: () => {},
      },

      {
        Title: this.$t("Nav.System.Title"),
        Icon: "mdi-power-settings",
        Group: [
          {
            Title: this.$t("Nav.System.Restart"),
            Icon: "mdi-restart",
            Click: () => {
              alert("System Restart");
            },
          },
          {
            Title: this.$t("Nav.System.Shutdown"),
            Icon: "mdi-power",
            Click: () => {
              alert("System Shutdown");
            },
          },
        ],
      },
    ];
  },
  mounted() {},
};
</script>


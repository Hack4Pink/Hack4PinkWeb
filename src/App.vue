<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" @logout="logout" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
// eslint-disable-next-line no-unused-vars
import db from "./db.js";
export default {
  name: "App",
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.displayName;
      }
    });
  },
  components: {
    Navigation
  }
};
</script>

#FF96A7
<style lang="scss">
$primary: #ff96a7;
@import "node_modules/bootstrap/scss/bootstrap";
</style>

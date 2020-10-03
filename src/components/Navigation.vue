<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Hack 4 Pink </router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/classifier" v-if="user"
            >Classifier</router-link
          >
          <router-link class="nav-item nav-link" to="/login" v-if="!user"
            >Login</router-link
          >
          <router-link class="nav-item nav-link" to="/register" v-if="!user"
            >Register</router-link
          >
          <button
            class="nav-item nav-link btn btn-link"
            @click="$emit('logout')"
            v-if="user"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>

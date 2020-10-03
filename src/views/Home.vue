<template>
  <div class="mt-3">
    <div class="container text-center">
      <div v-if="user" class="text-center">
        Welcome back<span class="font-weight-bold text-info">
          {{ user.displayName }} </span
        >,

        <a href="#" role="button" class="text-primary" @click="$emit('logout')"
          >logout</a
        >
      </div>
      <div class="text-secondary text-centre"></div>
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Hack 4 Pink</h4>
          <p class="lead">
            <a
              href="https://www.cdc.gov/cancer/breast/basic_info/what-is-breast-cancer.htm"
              target="_blank"
              rel="noopener noreferrer"
              >Breast Cancer</a
            >
            is one of the leading causes of death among women, Hack 4 Pink is an
            effort to develop AI solutions to combat the disease.
          </p>

          <router-link
            class="btn btn-outline-primary mr-2"
            to="/register"
            v-if="!user"
            >Register</router-link
          >
          <router-link
            class="btn btn-outline-primary mr-2"
            to="/login"
            v-if="!user"
            >Log In</router-link
          >
          <router-link class="btn btn-primary" to="/classifier" v-if="user"
            >Classifier</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  props: ["user"]
};
</script>

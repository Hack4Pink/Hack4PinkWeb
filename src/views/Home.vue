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
      <div class="row justify-content-center" v-if="!user">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Pink Buddy</h4>
          <p class="lead">
            <a
              href="https://www.cdc.gov/cancer/breast/basic_info/what-is-breast-cancer.htm"
              target="_blank"
              rel="noopener noreferrer"
              >Breast Cancer</a
            >
            is one of the leading causes of death among women, with Pink Buddy
            we aim to provide support in addressing the barriers associated with
            the disease through increased awareness and assistance in clinical
            evaluation.
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
        </div>
      </div>
    </div>

    <div class="container" v-if="user">
      <HelloWorld class="text-primary" msg="Pink Buddy" />
      <br />
      <h3 class="text-primary">Breast Cancer Screening</h3>
      <br />
      <b-container class="text-left">
        <b-row>
          <b-col md="7"
            ><div class="pad">Enter Information for Screening</div>
          </b-col>
          <b-col md="2"
            ><router-link class="btn btn-primary" to="/symptoms"
              >Click Here</router-link
            ></b-col
          >
          <b-col md="1"
            ><b-icon icon="check-circle" variant="success"></b-icon
          ></b-col>
        </b-row>
        <b-row>
          <b-col md="7"><div class="pad">Make an Appointment</div></b-col>
          <b-col md="2"
            ><router-link class="btn btn-primary" to="/appointments"
              >Click Here</router-link
            ></b-col
          >
          <b-col md="1"
            ><b-icon icon="check-circle" variant="success"></b-icon
          ></b-col>
        </b-row>
        <b-row>
          <b-col md="7"
            ><div class="pad">
              Upload the image produced by thermal test Kit for results
            </div>
          </b-col>
          <b-col md="2"
            ><router-link class="btn btn-primary" to="/classifier"
              >Click Here</router-link
            ></b-col
          >
          <b-col md="1"
            ><b-icon icon="check-circle" variant="success"></b-icon
          ></b-col>
        </b-row>
      </b-container>
      <br />
      <div>
        <b-img
          src="https://www.elchackathon.com/img/promo.png"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
    </div>
    <div v-if="!user">
      <b-img
        src="https://www.elchackathon.com/img/promo.png"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  props: ["user"],

  components: {
    HelloWorld
  },
  data() {
    return {};
  }
};
</script>

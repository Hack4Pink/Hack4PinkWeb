import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Classifier from "../views/Classifier.vue";
import Symptoms from "../views/Symptoms.vue";
import Appointments from "../views/Appointments.vue";
import Hub from "../views/Hub.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/classifier",
    name: "classifier",
    component: Classifier
  },
  {
    path: "/hub",
    name: "hub",
    component: Hub
  },
  {
    path: "/symptoms",
    name: "symptoms",
    component: Symptoms
  },
  {
    path: "/appointments",
    name: "appointments",
    component: Appointments
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;

<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Add Information for screening</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>

        <div class="form-group">
          <label>City</label>
          <input
            type="text"
            class="form-control"
            v-model="user.city"
            required
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input type="text" class="form-control" v-model="user.age" required />
        </div>
        <div class="form-group">
          <label>Height</label>
          <input
            type="text"
            class="form-control"
            v-model="user.height"
            required
          />
        </div>

        <div class="form-group">
          <label>Weight</label>
          <input
            type="text"
            class="form-control"
            v-model="user.weight"
            required
          />
        </div>

        <div class="form-group">
          <label>Blood Group</label>
          <input
            type="text"
            class="form-control"
            v-model="user.blood"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Info</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../db.js";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("reports")
        .add(this.user)
        .then(() => {
          alert("info successfully entered!");
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
          this.user.age = "";
          this.user.height = "";
          this.user.weight = "";
          this.user.blood = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

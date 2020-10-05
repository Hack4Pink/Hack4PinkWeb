




<template>
<div class="container">
    <h2 class="text-primary">Research Hub</h2>
    <br>

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home">Clinical Trials</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile">Research Papers</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">

        <div class="search">
    <div class="searchbar text-white bg-primary mb-3">
      <h5>
        Search for info on the latest clinical trials by city, cancer type or treatments
      </h5>
      <form @submit.prevent="getResult(query)">
        <input
          class="form-control"
          type="text"
          placeholder="Type in your search"
          v-model="query"
        />
        <input type="submit" value="Search" class="btn-lg" />
      </form>
    </div>
    <div class="results">
       {{ info }}
      </div>
    </div>
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('profile') }" id="profile">Profile content</div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('contact') }" id="contact">Contact content</div>
    </div>
    
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      activeItem: 'home',
      msg: "Search",
      query: "",
      info: ""
    };
  },
  methods: {
    getResult(query) {
      axios
        .get("https://clinicaltrialsapi.cancer.gov/v1/terms?term=" + query)
        .then(response => (this.info = response.data));
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  margin: 9px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.19) 2px solid;
  border-radius: 15px;
}
.img {
  width: 97%;
  margin: 9px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.795) 2px solid;
}
.text {
  width: 97%;
  margin: 9px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: rgba(0, 0, 0, 0.795) 2px solid;
}
.btn-lg {
  margin: 10px;
}
h4 {
  margin: 10px;
}
</style>

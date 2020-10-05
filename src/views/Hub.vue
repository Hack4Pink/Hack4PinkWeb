




<template>
<div class="container">
    <h2 class="text-primary">Research Hub</h2>
    <br>

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home">Clinical Trials</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile">News Articles</a>
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
      <div class="tab-pane fade" :class="{ 'active show': isActive('profile') }" id="profile">
        <div class="searchbar">
      <form @submit.prevent="fetchSearchNews">
        <input type="text" placeholder="search..." v-model="searchword">
      </form>
      <div class="search-icons">
        <i v-if="!isBusy" class="fas fa-search" @click="fetchSearchNews"></i>
        <i v-else class="fas fa-spinner fa-spin"></i>
        <i class="fas fa-times" @click="fetchTopNews"></i>
      </div>
    </div>
    <div class="result-list">
      <article v-for="(article, index) in articles" :key="index" @click="navTo(article.url)">
        <header>
          <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
          <i v-else class="fas fa-image"></i>
        </header>
        <section v-html="article.title"></section>
        <footer>
          <i class="fas fa-chevron-right"></i>
        </footer>
      </article>
    </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
    </div>
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('contact') }" id="contact">Contact content</div>
    </div>
    
  </div>
  
</template>

<script>
import axios from "axios";
export default {
   props: [
      'apiKey'
    ],
  name: "Search",
  data() {
    return {
      activeItem: 'home',
      msg: "Search",
      query: "",
      info: "",
          apiUrl: '',
        isBusy: false,
        showloader: false,
        currentPage: 1,
        totalResults: 0,
        maxPerPage: 20,
        searchword: '',
        articles: [],  
    };
  },

    computed: {
      pageCount() {
        return Math.ceil(this.totalResults/this.maxPerPage);
      }
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
    },
  navTo(url) {
        window.open(url);
      },
      resetData() {
        this.currentPage = 1;
        this.articles = [];
      },
      fetchSearchNews() {
        if(this.searchword !== '')
        {
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + '89759c334b7c43ba80437587fbfda932';
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
        else {
          this.fetchTopNews();
        }
      },
      fetchTopNews() {
        this.apiUrl = 'https://newsapi.org/v2/everything?q=breast cancer' +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + '89759c334b7c43ba80437587fbfda932';
        this.isBusy = true;
        this.searchword = '';
        
        this.resetData();
        this.fetchData();
      },
      fetchData() {
        let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element => {
              this.articles.push(element);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
              this.showloader = true;
              this.currentPage += 1;
              this.fetchData();
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      }
    },
    created() {
      this.fetchTopNews();
    },
     mounted() {
      this.scrollTrigger();
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

 article {
      display: grid;
      grid-template-columns: 200px auto 40px;
      grid-template-rows: 100px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      cursor: pointer;
 }
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
        img {
          max-width: 100%;
          height: auto;
        }
        i {
          font-size: 2rem;
        }
       #scroll-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 1.6rem;
    }


     section {
        margin: 0;
        padding: 10px;
        height: 100px;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #888;
      }

      .search-icons {
        color: palevioletred;
      }
        i {
          margin-left: 15px;
          cursor: pointer;
        }
       .searchbar {
      font-size: 1.6rem;
      }


</style>

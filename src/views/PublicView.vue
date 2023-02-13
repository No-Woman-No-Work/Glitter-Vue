<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        <header>Explore</header>

        
        <div class="search-bar d-flex justify-content-end">
          <Toggle v-model="currentOrder" class="toggle" :falseValue="'desc'" :trueValue="'asc'" :offLabel="'Descending'" :onLabel="'Ascending'" />
        </div>
        <TweetItem v-for="tweet in tweets" :key="tweet._id" :author="tweet.author.username" :publishDate="tweet.publishDate" :text="tweet.text" :tweet="tweet" :imagePath="tweet.imagePath" />
        </div>
      <footer class="text-center">
        <p class="mb-3">Don't miss what's happening! Users on Flitter are the first to know.</p>
        <router-link router-link to="/signup" class="nav-link active mb-3" aria-current="page">
          <button class="btn-see-more btn btn-secondary" type="button">Sign up now to see more</button>
            <!-- Paginator -->
            <div class="paginator">
            <vue-awesome-paginate :total-items="tweets.totalDocs" :items-per-page="tweets.limit" v-model="currentPage">
              <template #prev-button>
                  <span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                  >
                      <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                  </span>
              </template>

              <template #next-button>
                  <span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                  >
                      <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                  </span>
              </template>
            </vue-awesome-paginate>
          </div>
          <!-- Paginator -->
        </router-link>
      </footer>
    </div>
  </div>
</template> 

<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted, watch } from "vue";
import TweetItem from "../components/TweetItem.vue";
import Toggle from '@vueform/toggle'

const defaultPage = 1
const defaultLimit = 7
const defaultOrder = 'desc'

export default {
  name: 'PublicView',
  components: {
    TweetItem,
    Toggle
  },
  setup() {
    const currentPage = ref(defaultPage)
    const tweets = ref([]);
    const currentOrder = ref(defaultOrder);

    const getTweets = async (page, limit, order) => {
      const response = await flitterApi.get("/tweets", {
        params: {
          page,
          limit,
          order
        }
      });
      tweets.value = response.data.docs;
    };

    onMounted(() => {
      getTweets(currentPage.value, defaultLimit, currentOrder.value);
    });

    watch(() => currentPage.value, () => {	
      getTweets(currentPage.value, defaultLimit, currentOrder.value);	
    })

    watch(() => currentOrder.value, () => {
      getTweets(currentPage.value, defaultLimit, currentOrder.value);
    })

    return {
      tweets,
      currentPage,
      currentOrder
    };
  },
}
</script>

<style scoped>
header {
text-shadow: 3px 3px #95a4ff;
-webkit-text-stroke: 1px rgba(0, 0, 0);
padding: 10px;
font-size: 40px;
font-weight: bold;
color: #ffa580;
letter-spacing: 2px;
}
.btn-see-more {
	line-height: 28pt;
	padding: 0 20px;
	background: #ffa580;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
}
.tweets-container {
  margin-top: 1em;
}

.paginator {
    text-align: center;
  }

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0rem;
}

.search-bar{
  margin-bottom: 1em
}

@import "@vueform/toggle/themes/default.css";

  .toggle {
    --toggle-width: 7rem;
    --toggle-height: 1.85rem;

    --toggle-bg-on: #ffa580;
    --toggle-border-on: #000000;
    --toggle-bg-off: #ffa580;
    --toggle-border-off: #000000;

    --toggle-text-on: #ffffff;
    --toggle-text-off: #ffffff;

    border: 1px solid rgba(0, 0, 0, 1);
	  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
    color: rgb(51, 51, 51);
    font-size: 0.8rem
  }
  .paginator {
  text-align: center;
  }
  .paginator .paginate-buttons {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: #ffa580;;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  }
  
  .paginator .back-button,
  .paginator .next-button {
    margin-inline: 10px;
    border-radius: 25px;
  }
  
  .paginator .first-button {
    border-start-start-radius: 25px;
    border-end-start-radius: 25px;
  }
  .paginator .last-button {
    border-start-end-radius: 25px;
    border-end-end-radius: 25px;
  }
  
  .paginator .back-button svg {
    transform: rotate(180deg) translateY(-2px);
  }
  .paginator .next-button svg {
    transform: translateY(2px);
  }
  .paginator li:nth-child(2) > .paginate-buttons.number-buttons {
    border-start-start-radius: 25px;
    border-end-start-radius: 25px;
    transition: none;
  }
  .paginator li:nth-last-child(2) > .paginate-buttons.number-buttons {
    border-start-end-radius: 25px;
    border-end-end-radius: 25px;
  }
  
  .paginator .active-page {	
    background-color: #2980b9;	
    color: #fff;	
  }	
  	
  .paginator .active-page {	
    background-color: #2980b9;	
    color: #fff;	
  }	
  	
  .paginator .paginate-buttons:hover {	
    background-color: #f5f5f5;	
  }	
  	
  .paginator .active-page:hover {	
    background-color: #388ac1;	
  }
  .paginator .back-button:active,
  .paginator .next-button:active {
    background-color: #e6e6e6;
  }
</style>

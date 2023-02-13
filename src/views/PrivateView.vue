<template>

  <div class="tweets-container container-fluid">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        <header>For You</header>
        <TweetCard />

        <!-- Search bar -->
        <div class="search-bar d-flex justify-content-end">
          <Toggle v-model="currentOrder" class="toggle-blue" :falseValue="'desc'" :trueValue="'asc'" :offLabel="'Descending'" :onLabel="'Ascending'" />
        </div>
        <!-- Search bar -->

        <TweetItem v-for="tweet in tweets" :author="tweet.author.username" :publishDate="tweet.publishDate"
          :text="tweet.text" :key="tweet._id" :tweet="tweet" :imagePath="tweet.imagePath" />
        
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
      </div>
    </div>
  </div>
</template>


<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted, watch } from "vue";
import TweetItem from "../components/TweetItem.vue";
import TweetCard from '@/components/TweetCard.vue'
import Toggle from '@vueform/toggle'

const defaultPage = 1
const defaultLimit = 2
const defaultOrder = 'desc'

export default {
  name: 'PrivateView',
  components: {
    TweetItem,
    TweetCard,
    Toggle
  },
  props: [
    'currentSearch'
  ],
  setup(props) {
    const currentPage = ref(defaultPage);
    const currentOrder = ref(defaultOrder);
    const currentSearch = ref(props.currentSearch);
    const tweets = ref("");

  const getTweets = async (page, limit, order) => {
      const response = await flitterApi.get("/tweets/private", {
        params: {
          page,
          limit,
          order
        }
      });

      tweets.value = response.data.docs;
      console.table(response.data.docs);
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

    watch(() => currentSearch.value, () => {	
      // Isso e a única coisa que não funciona	
      console.log(currentSearch.value);	
      getTweets(currentPage.value, defaultLimit, currentOrder.value);	
    })	
    const updateSearch = async (search) => {	
      currentSearch.value = search;	
      console.log(currentSearch.value);	
    };	
    return {	
      tweets,	
      currentPage,	
      currentOrder,	
      updateSearch	
    };	
  },	
}	
</script>


<style socoped>
header {
text-shadow: 3px 3px #95a4ff;
-webkit-text-stroke: 1px rgba(0, 0, 0);
padding: 10px;
font-size: 40px;
font-weight: bold;
color: #ffa580;
letter-spacing: 2px;
}
.tweets-container {
margin-top: 1em;
}

/* 

Paginator

*/


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
  background-color: #99e98e;;
  color: f8f4e5;
}

.paginator .active-page {
  background-color: #99e98e;;
  color: f8f4e5;
}

.paginator .paginate-buttons:hover {
  background-color: #f8f4e5;
}

.paginator .active-page:hover {
  background-color: #99e98e;;
}
.paginator .back-button:active,
.paginator .next-button:active {
  background-color: #e6e6e6;
}

/* 

Paginator

*/

  .search-bar {
    margin-bottom: 1em;
  }
@import "@vueform/toggle/themes/default.css";
.toggle-blue {
    --toggle-width: 7rem;
    --toggle-height: 1.85rem;
    --toggle-bg-on: #2980b9;
    --toggle-border-on: #2980b9;
    --toggle-bg-off: #2980b9;
    --toggle-border-off: #2980b9;
    --toggle-text-on: #ffffff;
    --toggle-text-off: #ffffff;
  }
</style>
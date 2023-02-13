<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        
        <div class="search-bar d-flex justify-content-end">
          <Toggle v-model="currentOrder" class="toggle-blue" :falseValue="'desc'" :trueValue="'asc'" :offLabel="'Descending'" :onLabel="'Ascending'" />
        </div>
        <TweetItem v-for="tweet in tweets" :key="tweet._id" :author="tweet.author.username" :publishDate="tweet.publishDate" :text="tweet.text" :tweet="tweet" :imagePath="tweet.imagePath" />
        </div>
      <footer class="text-center">
        <p class="mb-3">Don't miss what's happening! Users on Flitter are the first to know.</p>
        <router-link router-link to="/signup" class="nav-link active mb-3" aria-current="page">
          <button class="btn-see-more btn btn-secondary" type="button">Sign up now to see more</button>
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

<style>
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

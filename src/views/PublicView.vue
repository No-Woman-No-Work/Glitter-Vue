<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <SearchBar @searched="onSearch($event)" />
      <div class="mt-2">
      <div class="d-flex justify-content-end"><SortButton /></div>
        <TweetItem v-for="tweet in tweets" :key="tweet._id" :author="tweet.author.username" :publishDate="tweet.publishDate" :text="tweet.text" :tweet="tweet" :imagePath="tweet.imagePath" />
      </div>
      <footer class="text-center">
        <p class="mb-3">Don't miss what's happening! Users on Flitter are the first to know.</p>
        <router-link router-link to="/signup" class="nav-link active mb-3" aria-current="page">
          <button class="btn btn-secondary" type="button">Sign up now to see more</button>
        </router-link>
      </footer>
    </div>
  </div>
</template> 

<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted } from "vue";
import TweetItem from "../components/TweetItem.vue";
import SortButton from "../components/SortButton.vue";


export default {
  name: 'PublicView',
  components: {
    TweetItem,
    SortButton
  },
  setup() {
    const tweets = ref([]);
    const getTweets = async () => {
      const response = await flitterApi.get("/tweets", {
        params: {
          page: 1,
          limit: 7,
          order: 'desc'
        }
      });
      tweets.value = response.data.docs;
    };

    onMounted(() => {
      getTweets();
    });

    return {
      tweets,
    };
  },
}
</script>

<style>
.tweets-container {
  margin-top: 1em;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0rem;
}
</style>

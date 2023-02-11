<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        <TweetCard />
        <TweetItem v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
      </div>
    </div>
  </div>
</template>


<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted } from "vue";
import TweetItem from "../components/TweetItem.vue";
import TweetCard from '@/components/TweetCard.vue'


export default {
  name: 'PublicView',
  components: {
    TweetItem,
    TweetCard
  },
  setup() {
    const tweets = ref("");
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
</style>

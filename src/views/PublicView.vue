<template>
    <div class = "container">
      <SearchBar @searched="onSearch($event)" />
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
      <div class="col" v-for="tweet in tweets" :key="tweet._id">
        <TweetItem 
          :tweet="tweet"
        />
      </div>
    </div>
  </div>
  <FooterSection />
</template>
  
<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted } from "vue";
import TweetItem from "../components/TweetItem.vue";
import FooterSection from "@/components/FooterSection.vue"


export default {
    name: 'PublicView',
    components: {
    TweetItem,
    FooterSection
    },
  setup() {
    const Tweets = ref("");
    const getTweets = async () => {
      const response = await flitterApi.get("/api/Tweets");
      Tweets.value = response.data;
    };

    onMounted(() => {
      getTweets();
    });

    return {
      Tweets,
      };
    },
  }
  </script>
  
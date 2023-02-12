<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        <TweetCard />
        <div class="d-flex justify-content-end"><SortButton /></div>
        <TweetItem v-for="tweet in tweets.docs" :author="tweet.author.username" :publishDate="tweet.publishDate"
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
import SortButton from "../components/SortButton.vue";

const defaultPage = 1
const defaultLimit = 2
const defaultOrder = 'desc'

export default {
  name: 'PrivateView',
  components: {
    TweetItem,
    TweetCard,
    SortButton
  },
  setup() {
    const currentPage = ref(defaultPage);
    const tweets = ref("");

    const getTweets = async (page, limit, order) => {
      const response = await flitterApi.get("/tweets/private", {
        params: {
          page,
          limit,
          order
        }
      });
      tweets.value = response.data;
      console.log(tweets.value)
    };

    onMounted(() => {
      getTweets(currentPage.value, defaultLimit, defaultOrder);
    });

    watch(() => currentPage.value, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        getTweets(currentPage.value, defaultLimit, defaultOrder);
      }
    })

    return {
      tweets,
      currentPage
    };
  },
}
</script>


<style>
.tweets-container {
  margin-top: 1em;
}

.paginator {
    text-align: center;
  }
  .paginator .paginate-buttons {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: #ffffff;
    border: none;
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

<template>
    <div class="tweets-container">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="mt-2">
          <header>Explore</header>

          
          <div class="search-bar d-flex justify-content-end">
            <Toggle v-model="currentOrder" class="toggle" :falseValue="'desc'" :trueValue="'asc'" :offLabel="'Descending'" :onLabel="'Ascending'" />

          </div>

          <TweetItem 
          v-for="tweet in tweets" 
          :key="tweet._id" 
          :btns="btnArray"
          :userId= "tweet.author._id"
          :author="tweet.author.username" 
          :publishDate="tweet.publishDate" 
          :text="tweet.text" 
          :tweet="tweet"
          @click.prevent="followUser(tweet)"
          :imagePath="tweet.imagePath" />

        </div>

        <footer class="text-center">
          <p class="mb-3">Don't miss what's happening! Users on Flitter are the first to know.</p>
          <router-link router-link to="/signup" class="nav-link active mb-3" aria-current="page">
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
    name: 'PublicPlusView',
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
        console.log(tweets.value)
      };

      
      const btnArray = ref([
        {
            txt: 'Follow',
            class: 'btn-secondary',
            action: (tweet) => followUser(tweet)
        }
      ])

      const followUser = async  (tweet) => {
        try {
            console.log(tweet)
            await flitterApi.post(`/users/${tweet.author._id}/follow`)
        } catch (error) {
            console.error(error)
        }
      }
  
      onMounted(() => {
        getTweets(currentPage.value, defaultLimit, currentOrder.value);
      });
  
      watch(() => currentOrder.value, () => {
        getTweets(currentPage.value, defaultLimit, currentOrder.value);
      })
  
      return {
        followUser,
        tweets,
        currentPage,
        currentOrder,
        btnArray
      };
    },
  }
  </script>
  
  <style>
  header {
text-shadow: 3px 3px #95a4ff;
-webkit-text-stroke: 1px rgba(0, 0, 0);
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
  




<!-- <template>
    <div class="tweets-container">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="mt-2">
          <TweetCard />
          <TweetItem 
          :btns="btnArray" v-for="tweet in tweets" 
          :key="tweet._id" 
          :tweet="tweet" 
          :author="tweet.author.username" 
          :userId="tweet.author._id"
          :publishDate="tweet.publishDate"
          :text="tweet.text" 
          @click.prevent="followUser(tweet.data.author._id)" />

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
        console.log(tweets.value)
        
      };

      const btnArray = ref([
      {
        txt: 'Follow',
		class: 'btn-secondary',
        action: (userId) => followUser(userId)
      },
    ]);

    const followUser = async (userId) => {
        try {
            await flitterApi.post(`/users/${userId}/follow`);
        } catch (error) {
            console.error(error);
      }
    };
  
        onMounted(() => {
        getTweets();
      });
  
        return {
            tweets,
            btnArray,
            
      };
    },
  }
  </script>
  
  
  <style>
  .tweets-container {
    margin-top: 1em;
  }
  </style>  -->


<!-- OLD PUBLIC VIEW HASTA AQUI  -->

<!--
<template>
    <div class="tweets-container">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="mt-2">
          <TweetItem :btns="btnArray" v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
        </div>
      </div>
  </div>
  </template> 
  
  <script>
  import flitterApi from "../api/flitterApi";
  import { ref, onMounted } from "vue";
  import TweetItem from "../components/TweetItem.vue";
  
  
  export default {
  name: 'PublicView',
  components: {
    TweetItem,
  },
  setup() {
    const tweets = ref([
    ]);
    const btnArray = ref([
      {
        txt: 'Follow',
		class: 'btn-secondary',
        action: () => followUser()
      },
    ]);
    const followUser = async (userId) => {
      try {
        await flitterApi.post(`users/${userId}/follow`);
      } catch (error) {
        console.error(error);
      }
    };
    const getTweets = async () => {
      const response = await flitterApi.get("/tweets", {
        params: {
          page: 1,
          limit: 7,
          order: 'desc'
        },
      });
      tweets.value = response.data.docs;
    };
    onMounted(() => {
      getTweets();
    });
    return {
      tweets,
      btnArray,
    };
  },
}
  </script>
  
  <style>
    .tweets-container {
      margin-top: 1em;
    }
  </style>

<template>
    <tweet-item :btns="btnArray" @follow="followUser" class="mx-auto tweet-item">
    </tweet-item>
</template>
 
<script>
import TweetItem from '@/components/TweetItem.vue'
import { ref } from 'vue';
import flitterApi from "../api/flitterApi"
export default {
    name: "OldPublicView",
    components: {
        TweetItem,
    },
    setup() {
        const btnArray = ref([
            {
                txt: 'Follow',
                class: `${btnArray.value[0].isSuccess ? 'btn-success' : ''} ${btnArray.value[0].isLoading ? 'btn-loading' : ''}`,
                action: () => followUser(),
                isLoading: false,
                isSuccess: false,
            },
            {
                txt: 'Kudos',
                class: 'fa-regular fa-thumbs-up',
            },
        ])
        const followUser = async () => {
            btnArray.value[0].isLoading = true;
            try {
                await flitterApi.post(`/:userId/follow`);
                btnArray.value[0].isLoading = false;
                btnArray.value[0].isSuccess = true;
            } catch (error) {
                btnArray.value[0].isLoading = false;
                console.error(error);
            }
        };
        return {
            btnArray,
            followUser,
        }
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
  </style>
<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="mt-2">
        <header>Explore and make new friends!</header>

        <div class="search-bar d-flex justify-content-end">
          <Toggle v-model="currentOrder" class="toggle-blue" :falseValue="'desc'" :trueValue="'asc'" :offLabel="'Descending'" :onLabel="'Ascending'" />

        </div>

        <TweetItem 
        v-for="tweet in tweets" 
        :key="tweet._id" 
        :btns="btnArray"
        :userId= "tweet.author._id"
        :author="tweet.author.username" 
        :publishDate="tweet.publishDate" 
        :text="tweet.text" 
        :kudos="tweet.kudos"
        :likeName="likeName"
        :tweet="tweet"
        :imagePath="tweet.imagePath" />

      </div>

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

      <footer class="text-center">
        <p class="mb-3">Thank you for being part of this awesome community!.</p>
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
const defaultLimit = 10
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
    const tweet = ref('')
    const currentOrder = ref(defaultOrder);

    const likeName = 'kudos'
   
    

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
          action: (tweet) => followUser(tweet),
          icon: '<i class="fa-solid fa-user-plus"></i>'
      },
      {
          txt: 'Unfollow',
          class: 'btn-secondary',
          action: (tweet) => unfollowUser(tweet),
          icon: '<i class="fa-solid fa-user-minus"></i>'
      },
      {
          txt: 'Kudos',
          class: 'btn-secondary',
          action: (tweet) => kudo(tweet),
          icon: '<i class="fa-solid fa-heart"></i>'
      },
      {
          txt: 'DisKudos',
          class: 'btn-secondary',
          action: (tweet) => kudoDelete(tweet),
          icon:'<i class="fa-solid fa-hand-middle-finger"></i>'
      },
      {
          txt: 'Delete',
          class: 'btn-secondary',
          action: (tweet) => deleteTweet(tweet),
      },
    ])

    const deleteTweet = async (tweet) => {
      try {
        await flitterApi.delete(`/tweets/${tweet._id}`)
        getTweets(currentPage.value, defaultLimit, currentOrder.value)
      } catch(error) {
        console.error(error)
      }
    }
    

    const followUser = async  (tweet) => {
      console.log(tweet)
      try {
        
        await flitterApi.post(`/users/${tweet.author._id}/follow`)
      } catch (error) {
        console.error(error)
      }
    }

    const unfollowUser = async (tweet) => {
      try {
        await flitterApi.delete(`/users/${tweet.author._id}/unfollow`)
      } catch (error) {
        console.error(error)
      }
    }

    const kudo = async (tweet) => {
      try {
        console.log(tweet)
        const response = await flitterApi.post(`/tweets/${tweet._id}/kudos`)
        tweet.kudos = response.data.kudosSize
      } catch (error) {
        console.error(error)
      }
      
    }

    const kudoDelete = async (tweet) => {
      try {
        console.log(tweet)
        const response = await flitterApi.delete(`/tweets/${tweet._id}/kudos`)
        tweet.kudos = response.data.kudosSize
      } catch (error) {
        console.error(error)
      }
    }

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
      tweet,
      currentPage,
      currentOrder,
      btnArray,
      likeName
    };
  },
}
</script>

<style>

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
  --toggle-bg-on: #95a4ff;
  --toggle-border-on: #ffa580;
  --toggle-bg-off: #95a4ff;
  --toggle-border-off: #ffa580;
  --toggle-text-on: #ffffff;
  --toggle-text-off: #ffffff;

}



</style>
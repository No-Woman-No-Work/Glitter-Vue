<template>
    <div class="tweets-container">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <div class="mt-2">
          <TweetCard />
          <TweetItem :btns="btnArray" v-for="tweet in tweets" :author="tweet.author.username" :userId ="tweet.author._id.value" :publishDate="tweet.publishDate"
            :text="tweet.text" :key="tweet._id" :tweet="tweet" @click="btn.action(userId)" />
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
  </style> 

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
<style scoped>
.btn-success {
    background-color: rgb(112, 185, 112),
}
</style>

OLD PUBLIC VIEW
    
    <template>
   
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 1</h4>
                    <p class="card-text text-muted">Oh my God! Life is hard...and overall with the Bootcamp</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 2</h4>
                    <p class="card-text text-muted">Where is the Sil queen when we need her?</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 3</h4>
                    <p class="card-text text-muted">David deserves a several beers from all of us</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 4</h4>
                    <p class="card-text text-muted">Andrea is the cobaya </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 5</h4>
                    <p class="card-text text-muted">Nela has pelassssso</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 6</h4>
                    <p class="card-text text-muted">Don't worry Mariana, backend waits</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-auto text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
                <div class="col">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
                <span class="badge rounded-circle bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
                <div class="col border-end">&nbsp;</div>
                <div class="col">&nbsp;</div>
            </div>
        </div>
        <div class="col py-2">
            <div class="card">
                <div class="card-body">
                    <div class="float-end">Saturday, Feb 4th 2023</div>
                    <h4 class="card-title text-muted">Fleet 7</h4>
                    <p class="card-text text-muted">Emma is waiting for the next chap of The Last of Us</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   
</script>
<style scooped>
    
   
</style>
-->
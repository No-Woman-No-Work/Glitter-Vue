<template>
  <div class="tweet list-group">
    <div class="tweet-box card list-group-item d-flex justify-content-between align-items-center">
        <div class="ms-3 me-3 w-100">
          <div class="d-flex align-items-center">
            <img src="../assets/img/logo_navbar.svg
            " alt="profile image" style="width: 45px; height: 45px" class="rounded-circle" />
            &nbsp;&nbsp;
            <p class="fw-bold mb-0">@{{ author }}</p>
            <p class="text-secondary mb-0 ms-auto">{{ formattedDate(publishDate) }}</p>
          </div>
          <p class="mb-2 mt-2">{{ text }}</p>
          <div class="d-flex" v-if="imagePath">
            <img class="w-100" :src="'http://localhost:3000' + imagePath" />
          </div>
          <div>
            <p class="fw-bold mb-0">{{ kudos }} kudos </p>
          </div>
        </div>
    </div>
    <div>
      <div class="card-footer p-2 d-flex justify-content-around">
        <button v-for="btn in btns" 
          :key="btn.txt" 
          class="btn" 
          :class="btn.behaviour" 
          @click.prevent="btn.action(tweet)">
          {{ btn.txt }}
        </button>
      </div>
      <hr class="my-4">
    </div>
  </div>
</template>

<script>


export default {
  name: 'TweetItem',
  props: ['author', 'publishDate', 'text', 'imagePath', 'btns', 'tweet', 'kudos'],
  
  setup() {
    const formattedDate = date => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return (new Date(date)).toLocaleDateString('es-ES', options);
    };

    return {

      formattedDate,
    };
  }
}
</script>

<style scoped>
.tweet-box {
  background: #f8f4e5;
	border: 2px solid rgba(0, 0, 0, 1);
	box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px rgba(0, 0, 0, 1);
}
.text-secondary {
  font-size: 13px;
} 
@media (min-width: 992px) {
  .tweet {
  width: 51em;
}
}
</style>

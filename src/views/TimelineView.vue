<template>
  <div class="home">
    <NewTweet/>
    <NewTweet/>
    <NewTweet/>
    <NewTweet/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewTweet from '@/components/NewTweet.vue';
export default {
  name: 'TimelineView',
  components: {
    NewTweet
}
}
</script>

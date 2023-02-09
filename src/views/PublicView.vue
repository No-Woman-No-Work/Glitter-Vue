<template>
<div class="public">
    <div>
        <h3 class="text-center">See what’s happening in the world right now</h3>
        <tweet-item>
        </tweet-item>
    </div>
</div>
</template>


<script>
import TweetItem from '../components/TweetItem.vue'

export default {
    name: 'PublicView',
    components: {
        TweetItem,
    }
}
</script>
    
<style scooped>
   /*.public {
		max-width: 895px;
		margin: auto;
	}
    @media (min-width: 992px) {
		.public {
			margin: 4em auto;
		}
    }
    */
</style>



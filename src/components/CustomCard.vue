<template>
	<div class="card">
		<div class="card-body">
			<h5 v-if="title" class="card-title">{{ title }}</h5>
			<p v-if="parrafo" class="card-text">
				{{ parrafo }}
			</p>
			<slot></slot>
			<div class="d-grid gap-2">
				<button v-for="btn in btns" :key="btn.txt" class="btn" :class="btn.class"
					@click.prevent="btn.action ? resetPassword : null">
					{{ btn.txt }}
				</button>
				<router-link :to="link.route" v-for="link in link" :key="link.txt" class="link" :class="link.class">
					{{ link.txt }}
				</router-link>
				<p class="text-danger" v-if="error">{{ error }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CustomCard',
	props: ['title', 'parrafo', 'btns', 'link', 'error'],
	methods: {
		resetPassword() {
			this.$emit('reset-password');
		}
	}
}
</script>

<style scoped>
.card {
	border: none;
	box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
</style>


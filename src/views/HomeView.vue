<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Flitter logo" src="../assets/img/logo_flitter.svg" />
					<h2 class="text-center text-lg-start">
						Welcome to Flitter
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<custom-card class="mx-auto custom-card">
					<h4 class="text-center">
						Join us!
					</h4>
					<router-link to="/login" class="nav-link active" aria-current="page">
						<div class="login d-grid">
							<button class="btn btn-primary" type="button">Login</button>
						</div>
					</router-link>
					<router-link to="/signup" class="nav-link active" aria-current="page">
						<div class="signup d-grid">
							<button class="btn btn-secondary" type="button">Sing up</button>
						</div>
					</router-link>
				</custom-card>			
			</div>
		</div>
	</div>
</template>


<script>
	// @ is an alias to /src
	import CustomCard from '../components/CustomCard.vue'
	export default {
		name: 'HomeView',
		components: {
			CustomCard,
		}
	}
</script>

<style scoped>
	.home {
		max-width: 895px;
		margin: auto;
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}
	img {
		max-width: 315px;
		margin: 1em auto 0 auto;
	}
	.custom-card {
		max-width: 398px;
		margin-top: 1.6em;
	}
	h2 {
    color: #545454;
	}
	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 1em;
			margin-top: 6.9em;
		}
		.custom-card {
			margin: 0;
			margin-top: 8.7em;
		}
		h2 {
			color: #545454;
			margin: 0;
			margin-top: 0.8em;
			margin-left: 1.4em;
		}
		h4 {
			margin-bottom: 1.5em;
		}
		.signup {
			margin-top: 1em;
		}
	}
</style>
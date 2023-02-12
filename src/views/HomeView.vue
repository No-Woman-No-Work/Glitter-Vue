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
							<button class="btn btn-primary custom-btn" type="button">Login</button>
						</div>
					</router-link>
					<router-link to="/signup" class="nav-link active" aria-current="page">
						<div class="signup d-grid">
							<button class="btn btn-secondary second-btn" type="button">Registrer</button>
						</div>
					</router-link>
				</custom-card>
			</div>
		</div>
		<div class="jumbotron">
			<hr class="my-4">
			<p class="copy">Connect with friends, make new ones, and soar to new heights. 🛫 Don't be left behind, join the
				#FlitterFlock today and start flittering! #SpreadYourWings 🌪️</p>
			<p class="lead">
				<router-link to="/public">
					<button class="btn btn-primary custom-btn-explore" type="button">Explore</button>
				</router-link>
			</p>
		</div>
	</div>
	<FooterSection />
</template>




<script>
// @ is an alias to /src
import CustomCard from '../components/CustomCard.vue'
import FooterSection from "@/components/FooterSection.vue"
export default {
	name: 'HomeView',
	components: {
		CustomCard,
		FooterSection,
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
	max-width: 500px;
	margin: 1em auto 0 auto;
}


.custom-card {
	max-width: 398px;
	margin-top: 1.2em;
}


.custom-btn {
	display: block;
	margin: 0 auto;
	line-height: 28pt;
	padding: 0 20px;
	background: #ffa580;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
}

.custom-btn-explore {
	line-height: 28pt;
	padding: 0 20px;
	background: #ffa580;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
}


.second-btn {
	display: block;
	margin: 0 auto;
	line-height: 28pt;
	padding: 0 20px;
	background: #99e98e;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
	box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
}


h2 {
	color: #545454;
}


.signup {
	margin-top: 1em;
}


.jumbotron {
	margin-top: 5em;
	max-width: 855px;
	margin: 5.7em;
}


.copy {
	text-align: justify;
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
		margin-top: 5.9git em;
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


	.jumbotron {
		margin: 5em auto;
	}
}
</style>
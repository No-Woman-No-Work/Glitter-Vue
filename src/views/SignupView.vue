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

				<custom-card 
				:btns="btnArray" 
				:link="linkArray" 
				class="mx-auto custom-card"
				>
					<h4 class="text-center">
						Sign up
					</h4>
					<form @submit.prevent="signup">
						<div class="mb-3 mt-2">
							<input 
							type="email" class="form-control" placeholder="✉️ E-mail" v-model="email" />
						</div>
						<div class="mb-3 mt-2">
							<input 
							type="username" class="form-control" placeholder="👤 Username" v-model="username"/>
						</div>
						<div class="mb-3 mt-2">
							<input 
							type="password" class="form-control" placeholder="🔒 Password" v-model="password"/>
						</div>
						<button @clic.prevent="signup"></button>
					</form>
				</custom-card>
			</div>
		</div>
	</div>
	<FooterSection />
</template>

<script>
// import flitterApi from '@/api/flitterApi'
import { ref } from 'vue'
import flitterApi from "../api/flitterApi"
import CustomCard from "../components/CustomCard.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
	name: 'SignupView',
	components: {
		CustomCard,
		FooterSection,
	},
	setup() {
		const linkArray = [
			{
				txt: "Already a member?",
				class: "d-flex justify-content-end text-decoration-none",
				route: "/login"
			}
		];

		const btnArray = ref([{
			txt: 'Sign Up',
			class: 'btn-secondary',
			action: 'signup'
		}]);

		const email = ref("");
		const username = ref("");
		const password = ref("");
		const errorMessage = ref("");

		async function signup() {
			const usernameRegex = /^[a-zA-Z0-9_]+$/;
			if (!usernameRegex.test(username.value)) {
				errorMessage.value = "Username can only contain letters, numbers or the character _";
				return;
			}
			try {
				const result = await checkEmailAndUsername(email.value, username.value);
				if (result === "This email already exists" || result === "This username already exists") {
					errorMessage.value = result;
					return;
				}
				await flitterApi.post("/register", {
					email: email.value,
					username: username.value,
					password: password.value,
				});
				this.$router.push("/login"); 
				
			} catch (error) {
				// errorMessage.value = error.response.data.message;
				console.log('email o username repes 500') //cambiar
			}
		}

		async function checkEmailAndUsername(email, username) {
			try {
				const emailResponse = await flitterApi.post('/register', {
					email: email
				});
				if (emailResponse.status === 500) {
					return "This email already exists";
				}

				const usernameResponse = await flitterApi.post('/register', {
					username: username
				});
				if (usernameResponse.status === 500) {
					return "This username already exists";
				}

				return "ok";
			} catch (error) {
				return "Something went wrong";
			}
		}

		return {
			linkArray,
			btnArray,
			email,
			username,
			password,
			errorMessage,
			signup
		}
	},
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
		margin-top: 6.2em;
	}

	h2 {
		color: #545454;
		margin: 0;
		margin-top: 0.8em;
		margin-left: 1.4em;
	}
}
</style>

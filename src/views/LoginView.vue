<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Flitter logo" src="../assets/img/logo_flitter.svg" />
					<h2 class="text-center text-lg-start">Welcome to Flitter</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<custom-card
					:btns="btnArray"
					:link="linkArray"
					class="mx-auto custom-card"
				>
					<h4 class="text-center">Sign in</h4>

					<form @submit.prevent="login">
						<div class="mb-3 mt-2">
							<input
								type="username"
								class="form-control"
								v-model="username"
								placeholder="✉️ Username"
							/>
						</div>
						<div class="mb-3 mt-2">
							<input
								type="password"
								class="form-control"
								v-model="password"
								placeholder="🔒 Password"
							/>
						</div>
						<!-- <div class="text-danger">{{ errorMessage }}</div>
						<div class="text-center mt-2">
						<button class="btn-secondary">Login</button> -->
						<!-- </div> -->
					</form>
				</custom-card>
			</div>
		</div>
	</div>
	<FooterSection />
</template>

<script>
//RECORDATORIO: para llamar a la api, import flitterApi from ../api/flitterApi 
// en vez de importar axios, y usar axios.post(...) se usa flitterApi.post(...)
import { ref } from 'vue'
import flitterApi from "../api/flitterApi"
import CustomCard from "../components/CustomCard.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
	name: "LoginView",
	components: {
		CustomCard,
		FooterSection,
	},
	setup() {
		const linkArray = [
			{
				txt: "Forgot password?",
				class: "d-flex justify-content-end text-decoration-none",
			},
		];
		const btnArray = [
			{
				txt: "Login",
				class: "btn-secondary",
			},
		];
		const username = ref("");
		const password = ref("");
		const errorMessage = ref("");

		async function login() {
			try {
				const response = await flitterApi.post("/login", {
					username: username.value,
					password: password.value,
				});

				localStorage.setItem("access_token", response.data.access_token);
				this.$router.push("/home"); //cambiar a ruta zona privada
			} catch (error) {
				errorMessage.value = error.response.data.message;
			}
		}

		return {
			linkArray,
			btnArray,
			username,
			password,
			errorMessage,
			login,
		};
	},
};
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
		margin-top: 7.6em;
	}
	h2 {
		color: #545454;
		margin: 0;
		margin-top: 0.8em;
		margin-left: 1.4em;
	}
}
</style>

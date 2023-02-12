<!-- COMPONENTE para inyectar en el botón de logout -->
<template>
	<button type="button" class="btn" @click='handleLogout'><i class="fas fa-right-from-bracket fa-xl"></i>
	</button>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	setup() {
		const router = useRouter()

		function handleLogout() {
			const token = localStorage.getItem('access_token');
			if (token) {
				localStorage.removeItem('access_token');
				router.push('/');
			}
		}

		return {
			handleLogout,
		};
	},
};
</script>

<style scoped>

</style>



<!-- COMPONENTE para inyectar en el botón de logout -->
<template>
	<button @click='handleLogout'>Logout</button>
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



<!-- COMPONENTE para inyectar en el botón de logout -->
<template>
	<button @click="handleLogout">Logout</button>
</template>

<script>
export default {
	setup() {
		function handleLogout() {
			const token = localStorage.getItem("token");
			if (token) {
				localStorage.removeItem("token");
				this.$router.push({ name: "home" });
			}
		}

		return {
			handleLogout,
		};
	},
};
</script>


<!-- COMO SERÍA EN OPTIONS API -->
<!-- <template>
      <button @click="handleLogout">Logout</button>
    </template>
    
<script>
      export default {
      methods: {
            handleLogout() {
            const token = localStorage.getItem("token");
            if (token) {
            localStorage.removeItem("token");
            // Aquí puedes redirigir a la página de inicio de sesión o hacer otras acciones necesarias después de cerrar la sesión
            this.$router.push({ name: "home" })
            }
            },
      },
};
</script> -->
<template>
	<router-view v-slot="{ Component }">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</router-view>
</template>

<script setup>
	// import { useWebApp } from "vue-tg";
  //
	// const { initData, initDataUnsafe } = useWebApp();
  //
  // const router = useRouter();
	// console.log("vue tg", initData, initDataUnsafe);
	// console.log("js tg", window.Telegram.WebApp);
  // if (!(window.location.href.includes("localhost") || window.location.href.includes("127.0.0.1"))) {
  //   if (!window.Telegram.WebApp.initData) {
  //     router.replace({path: "/tips"});
  //   }
  // }
</script>

<style scoped></style>

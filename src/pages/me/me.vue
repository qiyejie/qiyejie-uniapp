<template>
	<view class="me">
		<web-view src="http://localhost:8080/#/me"></web-view>
	</view>
</template>

<script>

export default {
	data() {
		return {}
	},
	components: {
	},
	methods: {
		toLogin() {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.me {

}
</style>

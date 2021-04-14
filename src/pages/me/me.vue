<template>
	<view class="me"><tui-list-cell arrow @click="toLogin">去登录</tui-list-cell></view>
</template>

<script>
import tuiListCell from 'thorui-uni/lib/thorui/tui-list-cell/tui-list-cell'

export default {
	data() {
		return {}
	},
	components: {
		'tui-list-cell': tuiListCell
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
	position: absolute;
	width: 100%;
	top: var(--status-bar-height);
}
</style>

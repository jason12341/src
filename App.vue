<template>
	<div id="app">
		<transition :name="pageDirection">
			<keep-alive>
				<router-view v-if="!$route.meta.noKeepAlive"></router-view>
			</keep-alive>
		</transition>

		<transition :name="pageDirection">
			<router-view v-if="$route.meta.noKeepAlive"></router-view>
		</transition>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'app',
		computed: {
			...mapState([
				'pageDirection'
			])
		},
		methods: {},
		mounted() {},
	}
</script>

<style>

</style>
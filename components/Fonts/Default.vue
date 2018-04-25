<template>
	<span class="aby-mui-bar" :class="className">{{fontsTitle}}</span>
</template>

<script>
	export default {
		props: ['title','className'],
		data() {
			return {
				fontsTitle:this.title,fontsClass:this.className
			}
		},
		methods: {},
		mounted() {},
	}
</script>

<style scoped>
.aby-mui-bar {
	font-size: 15px !important;
	height: 100%;
	vertical-align: middle;
}
</style>
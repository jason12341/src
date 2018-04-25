<template>
	<mt-button :type="btnType" :size="btnSize" :icon="btnIcon"><slot name="imgs"></slot>{{btnTitle}}</mt-button>
</template>

<script>
	import { Button } from 'mint-ui';
	
	export default {
		components: {
			MtButton:Button
		},
		props: ['title','type','size','icon','className'],
		data() {
			return {
				btnTitle:this.title,
				btnType:this.type||'primary',
				btnSize:this.size||'large',
				btnIcon:this.icon,
				btnClass:this.className
			}
		},
		methods: {},
		mounted() {},
	}
</script>

<style>

</style>
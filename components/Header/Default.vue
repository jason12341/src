<template>
	<div class="header">
		<header class="mui-bar mui-bar-nav" :class="headerTransparent?'transparent':''">
			<slot name="back"><aby-back @click.native="goBack(page)"></aby-back></slot>
			<slot name="hSearch"></slot>
			<slot name="select"></slot>
			<slot name="tab"></slot>
			<slot name="title"></slot>
			<h1 class="mui-title" v-if="headerTitle">{{headerTitle}}</h1>
			<slot name="right"></slot>
		</header>
		<slot name="search"></slot>
	</div>
</template>

<script>
	import AbyBack from './Back.vue'
	
	export default {
		components: {
			AbyBack
		},
		props: ['title','pageNum','transparent'],//title：header标题，pageNum：返回层数,transparent：是否透明
		data() {
			return {
				headerTitle:this.title,
				page:this.pageNum||'',
				headerTransparent:this.transparent||false
			}
		},
		methods: {
			goBack(page) {
				if(page){
					this.$router.go(-page)
				}else{
					this.$router.back();
				}
			}
		},
		mounted() {},
		watch: {  
		    title(val){
		    	this.headerTitle = val;
		    }  
		}  
	}
</script>

<style scoped>
	.transparent{
		background: rgba(0, 0, 0, 0)!important;
		box-shadow: 0 0 0 #ccc;
		color:#FFFFFF;
	}
</style>
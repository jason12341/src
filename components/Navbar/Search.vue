<template>
	<div class="mui-input-row mui-search" @click="toSearch">
		<aby-icon type="search" class="aby-font-gray iconsearch"></aby-icon>
		<input type="search" class="mui-input-clear" data-input-clear="1" data-input-search="1" disabled="disabled" :placeholder="inpPlaceholder">
	</div>
</template>

<script>
	export default {
		props: ['placeholder', 'type'],
		data() {
			return {
				inpPlaceholder: this.placeholder || '请输入搜索内容'
			}
		},
		methods: {
			// 跳转到搜索页面
			toSearch() {
				this.$router.push({
					name: 'search',
					params: {
						type: this.type
					}
				});
			}
		},
		mounted() {

		},
	}
</script>

<style scoped>
	.mui-search input {
		border-radius: 12px;
		background-color: #FFFFFF;
		text-align: left;
		height: 32px;
		border-radius: 15px;
		margin-bottom: 0px;
	}
	
	.mui-search input[type=search] {
		padding-left: 40px;
		background-color: #FFFFFF;
	}
	
	.mui-search {
		background-color: #F0F0F0;
		padding: 4px 20px;
	}
	
	.iconsearch {
		position: absolute;
		margin-top: 3px;
		margin-left: 10px;
	}
</style>
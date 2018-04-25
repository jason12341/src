<template>
	<h1 class="mui-title">
		<div class="mint-search">
			<div class="mint-searchbar">
				<div class="mint-searchbar-inner">
					<i class="mintui mintui-search"></i>
					<input type="search" :placeholder="inputPlaceholder" v-model="searchValue" :disabled="inputDisabled" class="mint-searchbar-core">
				</div> 
			</div> 
		</div>
	</h1>
</template>

<script>
	export default {
		props: ['placeholder', 'disabled'],
		data() {
			return {
				inputPlaceholder: this.placeholder || '请输入关键字搜索',
				inputDisabled: this.disabled || false,
				searchValue: ''
			}
		},
		methods: {},
		mounted() {},
		watch: {
			searchValue(val) {
				this.searchValue = val;
				this.inputPlaceholder = val;
				this.$emit("eventSearch", val);
			}
		}
	}
</script>

<style scoped>
	.aby-search {
		position: absolute !important;
		top: 11px !important;
		left: 10px !important;
	}
	
	.mint-searchbar input {
		border-radius: 12px;
		background-color: rgba(255, 255, 255, 0);
		text-align: left;
		font-size: 14px;
		color: #BBBBBB;
	}
	
	.mint-searchbar,
	.mint-searchbar-inner {
		background-color: #F0F0F0;
	}
	.mint-searchbar{
		padding: 2px 10px;
		margin-top: 6px;
		border-radius: 15px;
	}
	.mint-searchbar-inner i{
		color: #BBBBBB;
		font-size: 17px;
	}
</style>
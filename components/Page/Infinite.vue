<template>
	<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0" style="margin-bottom: 60px;">
			<div style="min-height: 500px; padding-bottom: 60px;">
				<slot name="loadlist"></slot>
				<p v-show="loading" class="page-infinite-loading">
					<mt-spinner type="fading-circle"></mt-spinner>
					加载中...
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['type'],
		data() {
			return {
				list: [],
				loading: false,
				allLoaded: false,
				wrapperHeight: 0
			};
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					this.$emit("eventinfiniterBack",this.type,(res)=>{
						this.loading = !res;
					});
				}, 1500);
				this.loading = false;
			}
		},
		mounted() {
			this.wrapperHeight = document.documentElement.clientHeight;
		}
	};
</script>

<style scoped>
	.page-infinite {}
	
	.page-infinite-desc {
		text-align: center;
		color: #666;
		padding-bottom: 5px;
		border-bottom: solid 1px #eee;
	}
	
	.page-infinite-listitem {
		height: 50px;
		line-height: 50px;
		border-bottom: solid 1px #eee;
		text-align: center;
	}
	
	.page-infinite-listitem:first-child {
		border-top: solid 1px #eee;
	}
	
	.page-infinite-wrapper {
		margin-top: -1px;
		overflow: scroll;
	}
	
	.page-infinite-loading {
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
	
	.page-infinite-loading div {
		display: inline-block;
		vertical-align: middle;
		margin-right: 5px;
	}
</style>
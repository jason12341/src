<template>
	<mt-swipe :auto="4000" class="aby-banner">
		<mt-swipe-item v-for="(val,i) in list" :key="i" @click.native="onBanner(val)"><img :src="val.bannerImg"/></mt-swipe-item>
	</mt-swipe>

</template>

<script>
	export default {
		props: ['pageType'],
		data() {
			return {
				list:[]
			}
		},
		methods: {
			getBannerList(){
				this.$abyApi.General.getBanner(this.pageType,(res)=>{
					this.list = res.bannerList;
				});
			},
			// 点击banner
			onBanner(obj){
				if(this.$store.state.loginState){
					if(obj.bannerUrl !== ''){
						this.$router.push({
							name: 'webView',
							params: {
								title: obj.bannerTitle,
								url: obj.bannerUrl
							}
						});
					}
				}else{
					this.$router.push({
						name: 'login',
					});
				}
			}
		},
		mounted() {
			this.getBannerList();
		},
	}
</script>

<style>
.aby-banner,.aby-banner img{
	background-color: #dddddd;
	width: 100vw;
	height: 26.67vw !important;
}
</style>
<template>
	<div class="detail">
		<aby-header title="我的">
			<div slot="back"></div>
			<aby-fonts slot="right" class="aby-mui-bar" @click.native="toUrl" className="mui-pull-right" title="设置"></aby-fonts>
		</aby-header>
		<!--个人信息部分-->
		<ul class="mui-table-view mui-table-view-chevron" style="margin-top: 1px;">
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right" href="#/homePage">
					<img class="mui-media-object mui-pull-left" :src="cpUserInfo.cpBasic.cpLogo">
					<div class="mui-media-body">
						{{cpUserInfo.userName}}
						<p class='mui-ellipsis'>{{cpUserInfo.cpBasic.cpName}}</p>
					</div>
				</a>
			</li>
		</ul>
		<!--菜单部分-->
		<ul class="mui-table-view mui-table-view-chevron space">
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right menu" href="#/myProduct">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 我的产品库
				</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron space">
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right menu" href="#/myPurchase">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 我的询价
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right menu" href="#/myCollection">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 我的收藏
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right menu" href="#/myCode">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 店铺二维码
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link class="mui-navigate-right menu" :to="{name:'accountList'}">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 子账号管理
				</router-link>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron space">
			<li class="mui-table-view-cell mui-media menu">
				<span class="mui-navigate-right" @click="onDialTel">
					<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png"> 联系客服
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				cpUserInfo:this.$store.state.cpUserInfo,
				abyTel:this.$store.state.abyTel
			}
		},
		methods:{
			toUrl(){
				this.$router.push({name:'setting'});
			},
			onDialTel() {
				this.$tool.dialTelToApp(this.tel);
			},
		},
		mounted() {
			this.$parent.eventPageShow(this.$route.name);
		},
		activated() {
			// 底部导航栏
			this.$parent.eventPageShow(this.$route.name);
		},
	}
</script>
<style scoped>
	.mui-table-view-cell:after {
		left: 0px;
		background-color: #c8c7cc;
	}
</style>
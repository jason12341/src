<template>
	<div class="detail">
		<aby-header title="我的">
			<div slot="back"></div>
			<aby-icon type="setting" slot="right" @click.native="toUrl" class="mui-pull-right"></aby-icon>
		</aby-header>
		<div class="content">
			<!--个人信息部分-->
			<ul class="mui-table-view mui-table-view-chevron" style="margin-top: 1px;">
				<li class="mui-table-view-cell mui-media person">
					<a href="#/homePage">
						<img class="mui-media-object mui-pull-left personpic" :src="cpUserInfo.cpBasic.cpLogo">
						<!--组团-->
						<img class="role" src="../../static/images/ico/ico_role_travel.png" />
						<!--地接-->
						<img class="role" src="../../static/images/ico/ioc_role_local.png" />
						
						<div class="mui-media-body">
							{{cpUserInfo.userName}}
							<p class='mui-ellipsis'>{{cpUserInfo.cpBasic.cpName}}</p>
						</div>
					</a>
					<i class="mui-navigate-right"></i>
				</li>
			</ul>
			<!--菜单部分-->
			<ul class="mui-table-view mui-table-view-chevron space">
				<li class="mui-table-view-cell mui-media">
					<a class="menu" href="#/myProduct">
						<aby-icon-color class="ptype" type="myproduct"></aby-icon-color>我的产品库
					</a>
					<i class="mui-navigate-right"></i>
				</li>
			</ul>
			<ul class="mui-table-view mui-table-view-chevron space">
				<li class="mui-table-view-cell mui-media">
					<a class="menu" href="#/myPurchase">
						<aby-icon-color class="ptype" type="myinquiry"></aby-icon-color>我的询价
					</a>
					<i class="mui-navigate-right"></i>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class="menu" href="#/myCollection">
						<aby-icon-color class="ptype" type="mycollection"></aby-icon-color>我的收藏
					</a>
					<i class="mui-navigate-right"></i>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class="menu" href="#/myCode">
						<aby-icon-color class="ptype" type="mycode"></aby-icon-color>店铺二维码
					</a>
					<i class="mui-navigate-right"></i>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link class="menu" :to="{name:'accountList'}">
						<aby-icon-color class="ptype" type="account"></aby-icon-color>子账号管理
					</router-link>
					<i class="mui-navigate-right"></i>
				</li>
			</ul>
			<ul class="mui-table-view mui-table-view-chevron space">
				<li class="mui-table-view-cell mui-media menu">
					<span @click="onDialTel">
						<aby-icon-color class="ptype" type="service"></aby-icon-color>联系客服
					</span>
					<i class="mui-navigate-right"></i>
				</li>
			</ul>
		</div>
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
	.mui-table-view-cell {
		padding: 15px 13px;
	}
	.personpic{
		height: 65px!important;
		width: 65px!important;
		max-width: 65px!important;
		border-radius: 5px!important;
	}
	.mui-media-body{
		padding-left: 6px;
		padding-top: 13px;
	}
	/*身份标志*/
	.role{
		width: 40px;
		position: absolute;
		margin-left: -50px;
	}
	.mui-pull-right{
		color: #707070;
	}
</style>
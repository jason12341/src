<template>
	<div class="list-item">
		<!--酒店产品列表-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(li,i) in list" :key="i">
				<a href="javascript:;" @click="toDetail(li)">
					<img class="mui-media-object mui-pull-left aby-img" :src="li.hFaceImg">
					<div class="mui-media-body aby-list">
						<p class="aby-list-title">{{li.hName}}</p>
						<p class="mui-ellipsis">{{li.hAddress}}</p>
						<p class="mui-ellipsis aby-list-company">
							<aby-icon className="mui-pull-right" type="shop"></aby-icon>
							{{li.cpName}}
						</p>
						<p class="mui-ellipsis aby-list-data">
							<span>{{li.hStarlevel}}</span>
							<span>浏览（{{li.readCnt}}）</span>
							<span class="aby-list-price"><small>￥</small>{{li.sPrice}}起</span>
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: ['list'],
		data() {
			return {
			}
		},
		methods: {
			//查看详情
			toDetail(li){
				if(this.$store.state.loginState){
					let reqInfo = {};
					reqInfo.hId = li.hId;
					reqInfo.loading = 1;
					this.$abyApi.Hotel.getDetail(reqInfo,(res)=>{
						this.$router.push({
							name: 'webView',
							params: {
								title: li.hName,
								url: res.hotelInfo.detailUrl
							}
						});
					})
				}else{
					this.$router.push({
						name: 'login',
					});
				}
			}
		},
		mounted() {
			
		},
		watch: {  
		    list(val){
		    	this.list = val;
		    }  
		}  
	}
</script>

<style>
</style>
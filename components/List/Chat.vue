<template>
	<ul class="mui-table-view space">
		<li class="mui-table-view-cell mui-media" @click="toDetail">
			<a>
				<img class="mui-media-object mui-pull-left" src="../../static/images/logo.png">
				<span class="mui-badge mui-badge-danger">2</span>
				<div class="mui-media-body">
					李小白
					<p class='mui-ellipsis'>南京爱伴游网络科技有限公司</p>
				</div>
			</a>
		</li>
	</ul>
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
				this.$router.push({
					name: 'chat',
					params: {
						
					}
				});
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

<style scoped>
	.mui-media img{
		max-width: 50px;
		height: 50px;
	}
	.mui-media-body p{
		padding-right: 20px;
	}
	.state-blue{
		color: #08C7B5;
	}
	.state-gray{
		color: #AAAAAA;
	}
</style>
<template>
	<div>
		<aby-header title="消息">
			<div slot="back"></div>
		</aby-header>
		<div class="content">
			<ul class="mui-table-view space">
				<li class="mui-table-view-cell mui-media">
					<a>
						<img class="mui-media-object mui-pull-left" src="../../static/images/ico/ico_msgsys_3x.png">
						<span class="mui-badge mui-badge-danger">2</span>
						<div class="mui-media-body">
							系统消息
							<p class='mui-ellipsis'>您收到一条新的订单</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a>
						<img class="mui-media-object mui-pull-left" src="../../static/images/ico/ico_msginfo_3x.png">
						<span class="mui-badge mui-badge-danger">2</span>
						<div class="mui-media-body">
							系统消息
							<p class='mui-ellipsis'>您收到一条新的订单</p>
						</div>
					</a>
				</li>
			</ul>
			<aby-list></aby-list>
		</div>
	</div>
</template>

<script>
	import AbyList from '../../components/List/Chat.vue'
	export default {
		components: {
			AbyList
		},
		data() {
			return {}
		},
		mounted() {
			this.$parent.eventPageShow(this.$route.name);
		},
	}
</script>
<style scoped>
	.mui-badge {
		right: auto!important;
		left: 45px;
		top: 25%!important;
	}
	
	.mui-table-view-cell {
		padding: 13px 15px;
	}
	.mui-table-view .mui-media-object{
		width: 45px;
		height: 45px;
		max-width: 45px;
		border-radius: 4px;
	}
	.mui-media-body{
		padding-top: 2px;
		font-size: 16px;
	}
</style>
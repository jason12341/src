<template>
	<div>
		<aby-header title="消息">
			<div slot="back"></div>
		</aby-header>
		<ul class="mui-table-view content" style="margin-top: 1px;">
			<li class="mui-table-view-cell mui-media">
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
	</div>
</template>

<script>
	export default {
		components: {
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
	.mui-badge{
		right: auto!important;
		left: 45px;
		top: 25%!important;
	}
</style>
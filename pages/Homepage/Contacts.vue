<template>
	<div class="contacts">
		<!--联系人信息-->
		<ul class="mui-table-view mui-table-view-chevron" style="margin-top: 1px;">
			<li class="mui-table-view-cell mui-media">
				<img class="mui-media-object mui-pull-left" src="../../static/images/ico/ico_wechat.png">
				<div class="mui-media-body mui-ellipsis">
					杜小甫
					<p class='mui-ellipsis'>总经理</p>
					<div class="divContact">
						<i class="mui-icon mui-icon-phone"></i>
						<i class="mui-icon mui-icon-chatbubble"></i>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.divContact {
		width: 100px;
		position: absolute;
		right: 0px;
		margin-top: -40px;
		padding-right: 15px;
		text-align: right;
	}
	.divContact i{
		margin-left: 5px;
		font-size: 30px;
	}
	.mui-media-body{
		padding-right: 35px;
		font-size: 16px;
	}
	.mui-media-body p{
		font-size: 12px;
	}
	
</style>
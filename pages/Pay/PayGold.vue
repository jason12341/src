<template>
	<aby-page>
		<aby-header slot="header" title="质保金"></aby-header>
		<div class="mui-content" slot="content">
			<div class="aby-detail-header space">
				<h3 class="price">交纳金额<span>￥10055.00</span></h3>
				<p>同意支付10055元 （原付金额：10000元 + 支付宝手续费：55元）</p>
			</div>
			<div class="mui-input-row mui-checkbox paymethod space">
				<label><img class="icopay" src="../../static/images/ico/ico_alipay_3x.png"/>支付宝</label>
				<input name="checkbox1" value="" type="checkbox" checked="">
			</div>
			<div class="aby-button-panel">
				<aby-button class="aby-button-blue" title="确认支付"></aby-button>
			</div>
		</div>
	</aby-page>
</template>

<script>
</script>

<style scoped>
	.aby-detail-header {
		padding-top: 20px;
	}
	
	.aby-detail-header .price {
		font-weight: 400;
		font-size: 16px;
	}
	
	.aby-detail-header .price span {
		color: #FF9800;
	}
	
	.aby-detail-header p {
		padding: 0px!important;
		font-size: 12px;
	}
	.paymethod{
		background-color: #FFFFFF;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.paymethod label{
		line-height: 28px;
	}
	.icopay{
		width: 30px;
		margin-right: 10px;
		vertical-align: bottom;
		margin-top: -5px;
	}
	.mui-checkbox input[type=checkbox] {
		top: 21px;
	}
	
	.mui-checkbox input[type=checkbox]:before {
		content: '\E681';
	}
	
	.mui-checkbox input[type=checkbox]:checked:before {
		color: #08C7B5;
	}
	
	.mui-checkbox input[type=checkbox]:checked:before {
		content: '\E690';
	}
</style>
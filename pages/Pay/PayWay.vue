<template>
	<aby-page>
		<aby-header slot="header" title="订单支付"></aby-header>
		<div class="mui-content" slot="content">
			<div class="aby-detail-header mui-text-center price">
				<h4>待支付金额(元)</h4>
				<h3 class="price">￥8999.00</h3>
				<p>订单编号：23548745668456</p>
			</div>
			<div class="aby-detail-linegray"></div>
			<div class="orderMsg">
				<p class="aby-list-title">巴厘岛香港起止纯玩五星</p>
				<p>
					<aby-icon type="business" class="business"></aby-icon>
					内蒙古梦回草原旅行社有限责任公司
				</p>
			</div>
			<!--支付金额小于5000-->
			<div class="mui-input-row mui-checkbox paymethod space">
				<label>银行卡快捷支付</label>
				<input name="checkbox1" value="" type="checkbox" checked="">
			</div>
			<div class="aby-button-panel">
				<aby-button class="aby-button-blue" title="确认支付"></aby-button>
			</div>
			<!--支付大于500，超限额-->
			<div class="priceover space">
				<h3 class="">支付金额大于5000元</h3>
				<p>请登录呱啦啦网站www.gualala.cn进行支付</p>
			</div>
			<div class="aby-button-panel space">
				<aby-button class="aby-button-blue" title="扫码登录支付"></aby-button>
			</div>
			<div class="safe">
				<img src="../../static/images/ico/ico_pay_tl_3x.png" />
				<p>本平台由通联支付提供资金担保</p>
			</div>
		</div>
	</aby-page>
</template>

<script>
</script>

<style scoped>
	.price h3 {
		color: #FF9800!important;
		font-size: 24px;
		padding-top: 0px;
		margin-top: -5px;
		font-weight: 500;
	}
	
	.orderMsg,
	.paymethod,
	.priceover {
		background-color: #FFFFFF;
		padding: 10px 15px;
	}
	.safe{
		text-align: center;
		padding-top: 20px;
	}
	.safe img{
		width: 70px;
	}
	.safe p{
		color: #0171B9;
		font-size: 10px;
	}
	.aby-list-title {
		font-size: 14px!important;
	}
	
	.business {
		color: #A0A0A0;
		font-size: 20px;
		vertical-align: bottom;
	}
	.priceover{
		text-align: center;
	}
	.priceover h3{
		color: #FF9800!important;
		font-size: 20px;
		font-weight: 500;
	}
	
	.mui-checkbox input[type=checkbox] {
		top: 15px;
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
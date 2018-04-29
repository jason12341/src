<template>
	<aby-page>
		<aby-header slot="header" title="我的质保金"></aby-header>
		<div class="mui-content" slot="content">
			<ul class="mui-table-view space">
				<li class="mui-table-view-cell mui-media goldTotal">
					<div class="mui-media-body">
						<p>我的质保金总额</p>
						<p class="aby-detail-price"><small>￥</small>0.00</p>
					</div>
				</li>
			</ul>
			<p class="tipNoGold">您尚未交纳质保金，请点击交纳按钮</p>
			<ul class="mui-table-view space">
				<li class="mui-table-view-cell mui-media goldTotal">
					<div class="mui-media-body">
						<p>交纳金额</p>
						<p class="aby-detail-price"><small>￥</small>10000.00</p>
						<div class="btnPay">交纳</div>
					</div>
				</li>
			</ul>
			<div class="mui-input-row mui-checkbox mui-left">
				<label>同意<a>《质保金保障服务协议》</a></label>
				<input name="checkbox" value="" type="checkbox" checked>
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
	.goldTotal p:last-child {
		font-size: 20px!important;
		padding: 5px 0px;
	}
	
	.goldTotal p:first-child {
		font-size: 12px!important;
	}
	
	.tipNoGold {
		padding: 0px 10px;
	}
	
	.btnPay {
		background-color: #08C7B5;
		color: #FFFFFF;
		width: 80px;
		height: 63px;
		text-align: center;
		position: absolute;
		right: 0px;
		top: 0px;
		line-height: 63px;
	}
	
	.mui-checkbox input[type=checkbox] {
		top: 5px;
		left: 12px!important;
	}
	
	.mui-checkbox.mui-left label,
	.mui-radio.mui-left label {
		padding-left: 50px;
	}
	.safe{
		position: fixed;
		width: 100%;
		bottom: 8px;
	}
</style>
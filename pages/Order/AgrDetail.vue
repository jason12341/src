<template>
	<aby-page>
		<!--卖家中心为“收到的协议”  买家中心为“发出的协议”-->
		<aby-header title="协议详情" slot="header"></aby-header>
		<div class="mui-content" slot="content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell sender">
					<h4>南京上海三日游</h4>
					<p>发件人：南京牛气冲天旅行社</p>
					<p>收件人：南京爱伴游网络科技有限公司-李小白</p>
					<p>时间：2018-04-23 16:37</p>
				</li>
			</ul>
			<ul class="mui-table-view space">
				<li class="mui-table-view-cell">
					<h4 class="mui-text-center">南京上海三日游</h4>
					<p class="mui-pull-right creattime">创建时间：2018-04-23</p>
					<br />
					<table class="table table-bordered table-striped">
						<tbody>
							<tr>
								<td>甲方</td>
								<td>南京牛气冲天旅行社</code>
								</td>
							</tr>
							<tr>
								<td>乙方</td>
								<td>南京爱伴游网络科技有限公司
								</td>
							</tr>
							<tr>
								<td>合同标题</td>
								<td>南京上海三日游</td>
							</tr>
							<tr>
								<td>出行日期</td>
								<td>2018-04-26至2018-04-30</td>
							</tr>
							<tr>
								<td>人数</td>
								<td>6成人 2儿童</td>
							</tr>
							<tr>
								<td>结算价格</td>
								<td>￥5999</td>
							</tr>
							<tr>
								<td>甲方联系人</td>
								<td>牛老大（13276605250）</td>
							</tr>
							<tr>
								<td>乙方联系人</td>
								<td>李小白（18905101050）</td>
							</tr>
							<tr>
								<td colspan="2" class="mui-text-center">合同内容</td>
							</tr>
							<tr>
								<td colspan="2">提供接送机服务，五星级酒店，不含隐性消费</td>
							</tr>
						</tbody>
					</table>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell invoice">
					<h4><input type="checkbox"/> 开具发票</h4>
					<p><input type="text" placeholder="发票抬头" /></p>
					<p><input type="text" placeholder="税号" /></p>
					<p><input type="text" placeholder="发票内容" /></p>
				</li>
			</ul>
			<div class="operation">
				<div class="mui-col-xs-2">
					<aby-icon class="mui-icon" type="chat"></aby-icon><span class="icotext">联系</span></div>
				<div class="mui-col-xs-2">
					<aby-icon class="mui-icon" type="call"></aby-icon><span class="icotext">联系</span></div>
				<div class="mui-col-xs-4 btndefault">
					<input type="button" value="刷新协议" />
				</div>
				<div class="mui-col-xs-4 btnblue">
					<input type="button" value="确认协议" />
				</div>
			</div>
		</div>
	</aby-page>
</template>

<script>
</script>

<style scoped>
	h4{
		font-size: 16px;
	}
	.sender p{
		font-size: 12px;
	}
	.creattime{
		font-size: 12px;
	}
	.table {
		width: 100%;
		max-width: 100%;
		margin-bottom: 20px;
		margin-top: 10px;
	}
	
	.table-bordered {
		border: 1px solid #ddd;
	}
	
	.table-bordered>tbody>tr>th {
		border: 1px solid #ddd;
	}
	
	.table-bordered>tbody>tr>th,
	.table-bordered>tfoot>tr>th,
	.table-bordered>thead>tr>td,
	.table-bordered>tbody>tr>td,
	.table-bordered>tfoot>tr>td {
		border: 1px solid #ddd;
		padding: 5px;
		font-size: 12px;
	}
	
	/*发票*/
	.invoice{
		padding-bottom: 20px;
		margin-bottom: 60px;
	}
	.invoice input[type=text]{
		height: 30px;
		margin: 10px 0px 0px 0px;
		border-radius: 2px;
		font-size: 12px;
		padding-left: 8px;
	}
	
	.operation {
		height: 45px;
		width: 100%;
		position: fixed;
		bottom: 0px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 14px;
	}
	
	.operation .mui-col-xs-2,.operation .mui-col-xs-4 {
		float: left;
		padding: 5px 0px;
	}
	
	.operation .mui-icon {
		color: #08C7B5;
	}
	
	.operation .icotext {
		display: block;
		font-size: 12px;
		margin-top: -5px;
	}
	
	.btndefault input,
	.btnblue input {
		border: none;
		height: 36px;
	}
	
	.btndefault {
		border-left: 1px solid #F0F0F0;
	}
	
	.btndefault,
	.btndefault input {
		background-color: #f6f8fa;
		color: #656b79;
	}
	
	.btnblue,
	.btnblue input {
		background-color: #08C7B5;
		color: #FFFFFF;
	}
</style>
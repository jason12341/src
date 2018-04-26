<template>
	<aby-page>
		<aby-header title="发布询价" slot="header">
		</aby-header>
		<div class="mui-content" slot="content">
			<mt-popup v-model="popupVisible" position="bottom">
				<aby-picker @onConfirm="onSelectPicker" :list="typeList"></aby-picker>
			</mt-popup>
			<div class="mui-input-group">
				<div class="mui-input-row aby-input-row">
					<label>采购类型</label>
					<input type="text" v-model="publishInfo.selectTypeName" placeholder="请选择采购类型" readonly="readonly" @click="popupVisible=!popupVisible">
					<span class="aby-navigate-right"></span>
				</div>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<aby-field  v-model="publishInfo.selectTypeName" className="aby-input-default" placeholder="请选择采购类型" type="text" @click="popupVisible=!popupVisible" disabled="disabled">
						<label class="inLabel" slot="label">采购类型</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--线路、机票、机+酒-->
			<ul class="mui-table-view" v-if="publishInfo.selectType==10||publishInfo.selectType==30||publishInfo.selectType==40">
				<li class="mui-table-view-cell">
					<aby-field modelId="publishInfo.fromCity" className="aby-input-default" placeholder="请输入出发地" type="text">
						<label class="inLabel" slot="label">出发地</label>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field modelId="publishInfo.goCity" className="aby-input-default" placeholder="请输入目的地" type="text">
						<label class="inLabel" slot="label">目的地</label>
					</aby-field>
				</li>
			</ul>

			<!--酒店-->
			<div class="space"></div>
			<ul class="mui-table-view" v-if="publishInfo.selectType==20">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入酒店地点" type="text">
						<label class="inLabel" slot="label">酒店地点</label>
					</aby-field>
				</li>
			</ul>

			<!--景点-->
			<div class="space"></div>
			<ul class="mui-table-view" v-if="publishInfo.selectType==50">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入景点名称" type="text">
						<label class="inLabel" slot="label">景点名称</label>
					</aby-field>
				</li>
			</ul>
			<!--导游-->
			<div v-if="publishInfo.selectType==60">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请输入采购标题" type="text">
							<label class="inLabel" slot="label">采购标题</label>
						</aby-field>
					</li>
				</ul>
				<ul class="mui-table-view space">
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请输入目的地" type="text">
							<label class="inLabel" slot="label">目的地</label>
						</aby-field>
					</li>
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请输入接团地" type="text">
							<label class="inLabel" slot="label">接团地</label>
						</aby-field>
					</li>
				</ul>
			</div>
			<div class="space"></div>
			<!--线路、导游-->
			<ul class="mui-table-view space" v-if="publishInfo.selectType==10||publishInfo.selectType==60">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择出行时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">出行时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入出行天数" type="number">
						<label class="inLabel" slot="label">天数</label>
					</aby-field>
				</li>
			</ul>
			<!--机票、机+酒-->
			<div class="space"></div>
			<ul class="mui-table-view" v-if="publishInfo.selectType==30||publishInfo.selectType==40">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择航程类型" type="text" disabled="disabled">
						<label class="inLabel" slot="label">航程类型</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择出发时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">出发时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择返程时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">返程时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--机+酒-->
			<ul class="mui-table-view" v-if="publishInfo.selectType==40">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择入住时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">入住时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入离店时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">离店时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--酒店-->
			<div v-if="publishInfo.selectType==20">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请选择入住时间" type="text" disabled="disabled">
							<label class="inLabel" slot="label">入住时间</label>
							<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
						</aby-field>
					</li>
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请输入离店时间" type="text" disabled="disabled">
							<label class="inLabel" slot="label">离店时间</label>
							<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
						</aby-field>
					</li>
				</ul>
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row space">
						<label>房间数</label>
						<div class="mui-numbox" data-numbox-step='1' data-numbox-min='0'>
							<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
							<input class="mui-numbox-input" type="number" />
							<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
						</div>
					</div>
				</div>
			</div>
			<div class="space"></div>
			<!--景点-->
			<ul class="mui-table-view" v-if="publishInfo.selectType==50">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择游玩时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">游玩时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入离店时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">离店时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--酒店-->
			<ul class="mui-table-view" v-if="publishInfo.selectType==20">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择酒店标准" type="text" disabled="disabled">
						<label class="inLabel" slot="label">酒店标准</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入离店时间" type="text" disabled="disabled">
						<label class="inLabel" slot="label">离店时间</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--线路、机票、景点、机+酒-->
			<div class="mui-input-group" v-if="publishInfo.selectType!=20&&publishInfo.selectType!=60">
				<div class="mui-input-row aby-input-row">
					<label>成人</label>
					<div class="mui-numbox" data-numbox-step='1' data-numbox-min='0'>
						<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
						<input class="mui-numbox-input" type="number" />
						<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
					</div>
				</div>
				<div class="mui-input-row aby-input-row">
					<label>儿童</label>
					<div class="mui-numbox" data-numbox-step='1' data-numbox-min='0'>
						<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
						<input class="mui-numbox-input" type="number" />
						<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
					</div>
				</div>
			</div>
			<div class="space"></div>
			<!--线路-->
			<ul class="mui-table-view" v-if="publishInfo.selectType==10">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请选择交通方式" type="text" disabled="disabled">
						<label class="inLabel" slot="label">交通方式</label>
						<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<!--导游-->
			<div v-if="publishInfo.selectType==60">
				<ul class="mui-table-view space">
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请填写导服费（元/天）" type="text">
							<label class="inLabel" slot="label">导服费</label>
						</aby-field>
					</li>
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请填写定金（元）" type="text">
							<label class="inLabel" slot="label">订金</label>
						</aby-field>
					</li>
				</ul>
				<ul class="mui-table-view space">
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="不限" type="text" disabled="disabled">
							<label class="inLabel" slot="label">性别</label>
							<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>
						</aby-field>
					</li>
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请选择精通语言" type="text" disabled="disabled">
							<label class="inLabel" slot="label">精通语言</label>
							<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>							
						</aby-field>
					</li>
					<li class="mui-table-view-cell">
						<aby-field className="aby-input-default" placeholder="请填写从业年限（年）" type="text">
							<label class="inLabel" slot="label">从业年限</label>
						</aby-field>
						<aby-field className="aby-input-default" placeholder="请选择业务范围" type="text" disabled="disabled">
							<label class="inLabel" slot="label">业务范围</label>
							<span slot="allowRight"><i class="mint-cell-allow-right"></i></span>											
						</aby-field>
					</li>
				</ul>
			</div>
			<div class="space"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell liRefundRemark">
					<aby-field modelId="refundDesc" className="aby-input-area" placeholder="例：需要大巴接送、需要导游等" type="textarea" rows="5">
						<label class="areaLabel" slot="label">备注</label>
						<i slot="allowRight"></i>
					</aby-field>
				</li>
			</ul>
			<!--自动加载默认联系人-->
			<div class="space"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入联系人" type="text">
						<label class="inLabel" slot="label">联系人</label>
					</aby-field>
				</li>
				<li class="mui-table-view-cell">
					<aby-field className="aby-input-default" placeholder="请输入联系电话" type="tel">
						<label class="inLabel" slot="label">联系电话</label>
					</aby-field>
				</li>
			</ul>
			<div class="space"></div>
			<aby-button title="发布" class="aby-button-fixed"></aby-button>
		</div>
	</aby-page>

</template>

<script>
	export default {
		data() {
			return {
				popupVisible: false,
				typeList: [{
						text: '线路',
						value: 10
					},
					{
						text: '酒店',
						value: 20
					},
					{
						text: '机票',
						value: 30
					},
					{
						text: '机+酒',
						value: 40
					},
					{
						text: '景点门票',
						value: 50
					},
					{
						text: '导游',
						value: 60
					}
				],
				trafficTypeList:[],// 出行方式列表
				publishInfo:{
					title:'',// 标题
					selectType:10,// 采购类型数值
					selectTypeName:'线路',// 采购类型名称
					fromCity:'',// 出发地
					goCity:'',// 目的地
					selectDays:'',//行程天数
					fromTime:'',// 出发时间
					backTime:'',// 返程时间
					ticketType:'',// 机票航程类型
					peopleNum:'',// 成人数量
					childNum:'',// 儿童数量
					pDesc:'',// 附加说明
					isShowPhone: 0,// 是否显示电话
					trafficType:'',// 出行方式
					liveTime:'',// 入住时间
					leaveTime:'',// 离店时间
					playScenicTime:'',// 游玩时间
				},
			}
		},
		methods: {
			onSelectPicker(selected) {
				this.publishInfo.selectType = selected.value;
				this.publishInfo.selectTypeName = selected.text;
				this.popupVisible = false;
			},
			// 发布采购
			onSelect() {
				let reqInfo = {};
				if(this.publishInfo.selectType == 10) {
					reqInfo.selectType = this.publishInfo.selectType;
				}

			}
		},
		mounted() {},
	}
</script>

<style scoped>
	.mui-content {
		padding: 10px 0px 50px 0px;
	}
	
	.mui-input-group label {
		font-size: 14px;
		color: #999999;
		line-height: 18px;
	}
	
	.mui-input-group input {
		font-size: 16px;
	}
	
	.mui-numbox {
		float: left;
	}
	.mui-input-row label{
		padding-left: 23px!important;
		width: 95px;
	}
	.mui-input-row{
		height: 60px;
		line-height: 60px;
		padding-top: 10px;
	}
	.aby-navigate-right:after {
		content: '\e583';
		font-family: Muiicons;
		font-size: inherit;
		right: 15px;
		position: absolute;
		top: 25%;
		display: inline-block;
		color: #DDDDDD;
		-webkit-font-smoothing: antialiased;
	}
</style>
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
			<div class="space"></div>
			<!--线路、机票、机+酒-->
			<div class="mui-input-group" v-if="publishInfo.selectType==10||publishInfo.selectType==30||publishInfo.selectType==40">
				<div class="mui-input-row aby-input-row">
					<label>出发地</label>
					<input type="text" placeholder="请输入出发地">
				</div>
				<div class="mui-input-row aby-input-row">
					<label>目的地</label>
					<input type="text" placeholder="请输入目的地">
				</div>
			</div>
			<!--酒店-->
			<div class="space"></div>
			<div class="mui-input-group" v-if="publishInfo.selectType==20">
				<div class="mui-input-row aby-input-row">
					<label>酒店地点</label>
					<input type="text" placeholder="请输入酒店地点">
				</div>
			</div>
			<!--景点-->
			<div class="space"></div>
			<div class="mui-input-group" v-if="publishInfo.selectType==50">
				<div class="mui-input-row aby-input-row">
					<label>景点名称</label>
					<input type="text" placeholder="请输入景点名称">
				</div>
			</div>
			<!--导游-->
			<div v-if="publishInfo.selectType==60">
				<div class="space"></div>
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
						<label>采购标题</label>
						<input type="text" placeholder="请输入采购标题">
					</div>
				</div>
				<div class="space"></div>
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
						<label>目的地</label>
						<input type="text" placeholder="请输入目的地">
					</div>
					<div class="mui-input-row aby-input-row">
						<label>接团地</label>
						<input type="text" placeholder="请输入接团地">
					</div>
				</div>
			</div>
			<div class="space"></div>
			<!--线路、导游-->
			<div class="mui-input-group" v-if="publishInfo.selectType==10||publishInfo.selectType==60">
				<div class="mui-input-row aby-input-row">
					<label>出行时间</label>
					<input type="text" placeholder="请选择出行时间" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
				<div class="mui-input-row aby-input-row">
					<label>天数</label>
					<input type="number" pattern="\d*" placeholder="请输入出行天数">
				</div>
			</div>
			<!--机票、机+酒-->
			<div class="space"></div>
			<div class="mui-input-group" v-if="publishInfo.selectType==30||publishInfo.selectType==40">
				<div class="mui-input-row aby-input-row">
					<label>航程类型</label>
					<input type="text" placeholder="请选择航程类型" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
				<div class="mui-input-row aby-input-row">
					<label>出发时间</label>
					<input type="text" placeholder="请选择入住时间" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
				<div class="mui-input-row aby-input-row">
					<label>返程时间</label>
					<input type="number" pattern="\d*" placeholder="请输入离店时间">
				</div>
			</div>
			<div class="space"></div>
			<!--机+酒-->
			<div class="mui-input-group" v-if="publishInfo.selectType==40">
				<div class="mui-input-row aby-input-row">
					<label>入住时间</label>
					<input type="text" placeholder="请选择入住时间" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
				<div class="mui-input-row aby-input-row">
					<label>离店时间</label>
					<input type="number" pattern="\d*" placeholder="请输入离店时间">
				</div>
			</div>
			<div class="space"></div>
			<!--酒店-->
			<div v-if="publishInfo.selectType==20">
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
						<label>入住时间</label>
						<input type="text" placeholder="请选择入住时间" readonly="readonly">
						<span class="aby-navigate-right"></span>
					</div>
					<div class="mui-input-row aby-input-row">
						<label>离店时间</label>
						<input type="number" pattern="\d*" placeholder="请输入离店时间">
					</div>
				</div>
				<div class="space"></div>
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
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
			<div class="mui-input-group" v-if="publishInfo.selectType==50">
				<div class="mui-input-row aby-input-row">
					<label>游玩时间</label>
					<input type="text" placeholder="请选择游玩时间" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
			</div>
			<div class="space"></div>
			<!--酒店-->
			<div class="mui-input-group" v-if="publishInfo.selectType==20">
				<div class="mui-input-row aby-input-row">
					<label>酒店标准</label>
					<input type="text" placeholder="请选择酒店标准" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
			</div>
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
			<div class="mui-input-group" v-if="publishInfo.selectType==10">
				<div class="mui-input-row aby-input-row">
					<label>交通方式</label>
					<input type="text" placeholder="请选择交通方式" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
			</div>
			<div class="space"></div>
			<!--导游-->
			<div v-if="publishInfo.selectType==60">
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
						<label>导服费</label>
						<input type="text" placeholder="请填写导服费（元/天）">
					</div>
					<div class="mui-input-row aby-input-row">
						<label>订金</label>
						<input type="number" pattern="\d*" placeholder="请填写定金（元）">
					</div>
				</div>
				<div class="space"></div>
				<div class="mui-input-group">
					<div class="mui-input-row aby-input-row">
						<label>性别</label>
						<input type="text" placeholder="不限">
						<span class="aby-navigate-right"></span>
					</div>
					<div class="mui-input-row aby-input-row">
						<label>精通语言</label>
						<input type="number" pattern="\d*" placeholder="请选择精通语言" readonly="readonly">
						<span class="aby-navigate-right"></span>
					</div>
					<div class="mui-input-row aby-input-row">
						<label>从业年限</label>
						<input type="number" pattern="\d*" placeholder="请填写从业年限（年）">
					</div>
					<div class="mui-input-row aby-input-row">
						<label>业务范围</label>
						<input type="number" pattern="\d*" placeholder="请选择业务范围" readonly="readonly">
						<span class="aby-navigate-right"></span>
					</div>
				</div>
				<div class="space"></div>
			</div>
			<div class="space"></div>
			<div class="mui-input-group">
				<div class="mui-input-row aby-input-row">
					<label>备注</label>
					<input type="text" placeholder="例：需要大巴接送、需要导游等" readonly="readonly">
					<span class="aby-navigate-right"></span>
				</div>
			</div>
			<!--自动加载默认联系人-->
			<div class="mui-input-group">
				<div class="mui-input-row aby-input-row">
					<label>联系人</label>
					<input type="text" placeholder="请输入联系人" readonly="readonly">
				</div>
				<div class="mui-input-row aby-input-row">
					<label>联系电话</label>
					<input type="number" pattern="\d*" placeholder="请输入联系电话">
				</div>
			</div>
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
				typeList:[
					{text:'线路',value:10},
					{text:'酒店',value:20},
					{text:'机票',value:30},
					{text:'机+酒',value:40},
					{text:'景点门票',value:50},
					{text:'导游',value:60}
				],
				publishInfo:{
					title:'',// 标题
					selectType:10,// 采购类型数值
					selectTypeName:'线路',// 采购类型名称
					fromCity:'',// 出发地
					goCity:'',// 目的地
					fromTime:'',// 出发时间
					backTime:'',// 返程时间
					ticketType:'',// 机票航程类型
					peopleNum:'',// 成人数量
					childNum:'',// 儿童数量
				},
			}
		},
		methods: {
			onSelectPicker(selected){
				this.publishInfo.selectType = selected.value;
				this.publishInfo.selectTypeName = selected.text;
				this.popupVisible = false;
			},
		},
		mounted() {
		},
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
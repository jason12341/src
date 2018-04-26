<template>
	<aby-pull page="index">
		<aby-header slot="header">
			<div slot="back"></div>
			<header-select slot="select" title="全部询价" @eventSelectBack="eventBack" :selectList="selectList"></header-select>
			<aby-icon slot="right" className="mui-pull-right" type="add" @click.native="onPubish"></aby-icon>
		</aby-header>
		<div slot="navbar"></div>
		<div class="list-item" slot="loadlist" ref="loadlist">
			<div class="mui-card space" v-for="(li,i) in list">
				<div class="mui-card-header mui-card-media">
					<img :src="li.publisher.cpLogo">
					<div class="mui-media-body">
						{{li.publisher.cpName}}
						<p class="time">{{li.crateTime | filterConvertDateFromNow}}
							<span>
								<img src="../../static/images/logo.png">
								<span :id="li.selectId"></span>
							</span>
						</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner mui-navigate-right" @click="toDetail(li.selectId)">
						<h5>{{li.fromCity}}→{{li.goCity}}</h5>
						<p>出行时间：{{li.outServTime}}</p>
						<p>人数：{{li.peopleNum}}成人 <span v-if="li.childNum!=0">{{li.childNum}}儿童</span></p>
						<p>天数：{{li.selectDays}}天</p>
						<p>交通方式：{{li.trafficTypeName}}</p>
					</div>
				</div>
				<div class="mui-card-footer">浏览（{{li.readCnt}}）</div>
			</div>
		</div>
	</aby-pull>
</template>

<script>
	import HeaderSelect from '../../components/Header/Select.vue'

	export default {
		components: {
			HeaderSelect
		},
		data() {
			return {
				list: [],
				pageNum: 1,
				where: {},
				selectType: '',
				isPrice: '',
				scrollTop: '',
				selectList:[
					{title:'全部询价',value:''},
					{title:'线路询价',value:10},
					{title:'酒店询价',value:20},
					{title:'机票询价',value:30},
					{title:'机+酒询价',value:40},
					{title:'门票询价',value:50},
					{title:'导游服务',value:60},
				],// 询价类型
				
			}
		},
		methods: {
			scroll(top) {
				this.scrollTop = top;
			},
			getPullDown(callback) {
				let reqInfo = {};
				reqInfo.loading = 1; //不显示接口加载动画
				reqInfo.pageNum = this.pageNum = 1;
				reqInfo.isPrice = this.isPrice;
				reqInfo.selectType = this.selectType;
				reqInfo.where = this.where;

				this.$abyApi.Select.getPublishList(reqInfo, (res) => {
					this.list = res.cpSelectList;
					callback && callback(true);
				}, (err) => {
					callback && callback(false);
				});
			},
			getPullUp(callback) {
				let reqInfo = {};
				reqInfo.loading = 1;
				reqInfo.pageNum = this.pageNum = ++this.pageNum;
				reqInfo.isPrice = this.isPrice;
				reqInfo.selectType = this.selectType;
				reqInfo.where = this.where;

				this.$abyApi.Select.getPublishList(reqInfo, (res) => {
					this.list = this.list.concat(res.cpSelectList);
					callback && callback(true);
				}, (err) => {
					callback && callback(false);
				});
			},
			eventBack(e) {
				this.lists = [];
				this.selectType = e.value;
				this.getPullDown();
			},
			// 查看详情
			toDetail(id) {
				this.$router.push({
					name: 'purchaseDetails',
					params: {
						selectId: id
					}
				});
			},
			// 发布询价
			onPubish(){
				this.$router.push({name: 'purchasePublish'});
			}
		},
		mounted() {
			// 底部导航栏
			this.$parent.eventPageShow(this.$route.name);
			this.getPullDown();
		},
		updated(){
			//初始化倒计时
			for(var i = 0, len = this.list.length; i < len; i++) {
				if(this.list[i].selectState == 10)
					this.$tool.countdown(this.list[i].outServTime, this.list[i].selectId);
			}
		},
		activated() {
			// 底部导航栏
			this.$parent.eventPageShow(this.$route.name);
		},
	}
</script>
<style scoped>
	.mui-card {
		font-size: 14px;
		margin: 0px;
		border-radius: 0px;
		background-color: #fff;
		-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
		line-height: 25px;
	}
	
	.mui-card p {
		margin: 0px;
	}
	
	.time span {
		float: right;
	}
	
	.time img {
		width: 12px;
		height: 12px;
		margin-right: 5px;
	}
</style>
<template>
	<div class="list-items">
		<div class="list-item" v-for="tmp in lists">
			<div class="mui-card space">
				<div class="mui-card-header mui-card-media">
					<div>
						<p class="time">发布时间：{{tmp.publishTime|filterConvertDate}}
							<span>
								<span v-if="tmp.selectState == 10">正在进行</span>
								<span v-else>已结束</span>
							</span>
						</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner mui-navigate-right" @click="toDetail(tmp.selectId)">
						<!--线路10-->
						<div v-if="tmp.selectType == 10">
							<h5>{{tmp.fromCity}}→{{tmp.goCity}}<img class="" src="" alt="" /></h5>
							<p>出行时间： {{tmp.fromTime|filterConvertDate}}</p>
							<p>人数：{{tmp.peopleNum}}成人 <span>{{tmp.childNum}}儿童</span></p>
							<p>天数：{{tmp.selectDays}}</p>
							<p>航程类型：{{tmp.trafficTypeName}}</p>
						</div>
						<!--酒店20-->
						<div v-if="tmp.selectType == 20">
							<h5>预定{{tmp.hotelAddress}}酒店<img class="" src="" alt="" /></h5>
							<p>入住时间：{{tmp.liveTime|filterConvertDate}}</p>
							<p>离店时间：{{tmp.endTime}}</p>
							<p>房间数：{{tmp.roomNum}}</p>
							<p>酒店标准：{{tmp.hotelStar}}</p>
						</div>
						<!--机票30-->
						<div v-if="tmp.selectType == 30">
							<h5>{{tmp.fromCity}}→{{tmp.goCity}}<img class="" src="" alt="" /></h5>
							<p>航程类型：{{tmp.ticketType}} </p>
							<p>出发时间：{{tmp.fromTime|filterConvertDate}}</p>
							<p>返程时间：{{tmp.endTime}}</p>
							<p>人数：{{tmp.peopleNum}}成人 <span>{{tmp.childNum}}儿童</span></p>
						</div>
						<!--机+酒40-->
						<div v-if="tmp.selectType == 40">
							<h5>预定{{tmp.goCity}}机票和酒店<img class="" src="" alt="" /></h5>
							<p>出发地：{{tmp.fromCity}}</p>
							<p>出发时间：{{tmp.fromTime|filterConvertDate}}</p>
							<p>返程时间：{{tmp.endTime}}</p>
							<p>人数：{{tmp.peopleNum}}成人 <span>{{tmp.childNum}}儿童</span></p>
							<p>入住时间：{{tmp.liveTime|filterConvertDate}}</p>
							<p>离店时间：{{tmp.endTime}}</p>
							<p>房间数：{{tmp.roomNum}}</p>
						</div>
						<!--景点50-->
						<div v-if="tmp.selectType == 50">
							<h5>预定{{tmp.scenicName}}门票<img class="" src="" alt="" /></h5>
							<p>游玩时间：{{tmp.playScenicTime|filterConvertDate}}</p>
							<p>人数：{{tmp.peopleNum}}成人 <span>{{tmp.childNum}}儿童</span></p>
						</div>
						<!--导游60-->
						<div v-if="tmp.selectType == 60">
							<h5>寻找嘉兴导游<img class="" src="" alt="" /></h5><p>目的地：嘉兴</p><p>接团地：嘉兴 </p><p>出行时间：2018-7-21 </p><p>行程天数：3天 </p>
						</div>
					</div>
				</div>
				<div class="mui-card-footer">
					<div class="mui-col-xs-6">
						<span>浏览({{tmp.readCnt}})&nbsp;&nbsp;&nbsp;</span>
						<span>留言({{tmp.discussCnt}})</span>
						<!--<span>聊天(11)</span>-->
						<!--<span>推送(${li.notifyCnt})</span>-->
					</div>
					<div class="mui-col-xs-6 purchase-btn-group ">
						<span class="purchase-delete-btn" @click="onDelete(tmp.selectId)">删除</span>
						<span class="purchase-finish-btn" v-show="tmp.selectState == 10" @click="onFinish(tmp.selectId)">结束</span>
					</div>
				</div>
	
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		name: "purchase",
		props: ['list'],
		data() {
			return {
				lists: this.list
			}
		},
		methods: {
			onDelete(selectId){//删除询价
				this.$tool.confirm('您确定要删除吗？', (res) => {
					this.$abyApi.Select.delPublish(selectId, (res)=> {
						this.$tool.toast('删除成功！');
						this.$emit('getPullDown');
					})
				})
			},
			onFinish(){//结束询价
				this.$tool.confirm('结束询价后将收不到最新留言，确定要结束吗？', (res) => {
					this.$abyApi.Select.closePublish(selectId, (res)=> {
						this.$tool.toast('采购已结束');
						this.$emit('getPullDown');
					})
				})
			},
			toDetail(id) {// 查看详情
				this.$router.push({
					name: 'myPurchaseDetails',
					params: {
						selectId: id
					}
				});
			},
		},
		mounted() {

		},
		watch: {
			list(val) {
				this.lists = val;
			}
		}
	}
</script>

<style scoped>
	.list-item{
		margin: 10px;
	}
	.mui-card {
		font-size: 14px;
		margin: 0px;
		border-radius: 0px;
		background-color: #fff;
		-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
		line-height: 25px;
		border-radius: 3px;
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
	.mui-card-content-inner h5 img{
		float: right;
	}
	.purchase-btn-group{
		text-align: right;
	}
	.purchase-delete-btn{
		border: 1px solid #D0D0D0;
		color: #000;
		padding: 5px 20px;
		border-radius: 15px;
	}
	.purchase-finish-btn{
		padding: 5px 20px;
		border-radius: 15px;
		border: 1px solid #53D8CC;
		color: #53D8CC;
	}
</style>
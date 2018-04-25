<template>
	<div class="page">
		<aby-header title="" slot="header">
			<aby-back @click.native="goBack" slot="back"></aby-back>
			<header-search slot="hSearch" :placeholder="keyword" @eventSearch="eventSearchBack"></header-search>
			<aby-fonts slot="right" class="aby-mui-bar mui-pull-right" title="搜索" @click.native="getPullDown()"></aby-fonts>
		</aby-header>
		<div class="mui-content">
			<aby-tab slot="navbar_1" :list="tabList" @eventTabBack="eventTab" class="aby-top-fixed">
				<div v-for="(li,i) in tabList" :key="i" :slot="li.id">
					<aby-infoinite @eventinfiniterBack="eventinfiniter" :type="li.type" v-if="li.type=='line'" :tabkey="i">
						<list-line slot="loadlist" :list="li.data"></list-line>
					</aby-infoinite>
					<aby-infoinite @eventinfiniterBack="eventinfiniter" :type="li.type" v-if="li.type=='supplier'" :tabkey="i">
						<list-supplier slot="loadlist" :list="li.data"></list-supplier>
					</aby-infoinite>
				</div>
			</aby-tab>
		</div>
	</div>
</template>

<script>
	import AbyBack from '../../components/Header/Back.vue'
	import HeaderSearch from '../../components/Header/Search.vue'
	import ListLine from '../../components/List/Line.vue'
	import ListSupplier from '../../components/List/Supplier.vue'
	import AbyInfoinite from '../../components/Page/Infinite.vue'
	
	export default {
		props: [],
		components: {
			AbyBack,HeaderSearch,ListLine,ListSupplier,AbyInfoinite
		},
		data() {
			return {
				tabList: [{
						id:'line',
						title: '产品',
						type: 'line',
						data: []
					},
					{
						id:'supplier',
						title: '供应商',
						type: 'supplier',
						data: []
					},
				],
				pageNum: 1,
				orderBy: 1,
				lists: [],
				type: this.$route.params.type,//搜索类型
				keyword: this.$route.params.keyword,//关键字
				tabSelect:'line',// tab默认选中
			};
		},

		methods: {
			scroll(top) {},
			// 重写back方法
			goBack(){
				this.$router.push({ name: 'home' });
			},
			// 搜索子组件数据返回
			eventSearchBack(val) {
				this.keyword = val;
			},
			// tab点击返回监听
			eventTab(e) {
				this.tabSelect = e.type;
			},
			// 上推返回监听
			eventinfiniter(e){
				let reqInfo = {};
					reqInfo.keyWord = this.keyword;
					reqInfo.orderBy = this.orderBy;
					reqInfo.pageNum = this.pageNum = ++this.pageNum;
					reqInfo.loading = 1;
					reqInfo.where = this.where;
				if(this.tabSelect == 'line' && e == this.tabSelect){
					this.getLineList(reqInfo,2);
				}else if(this.tabSelect == 'supplier' && e == this.tabSelect){
					this.getSupplierList(reqInfo,2);
				}
			},
			// 获取线路详情
			getLineList(info,pullType,callback){
				this.$abyApi.Project.getLineListByKeyWord(info, (res) => {
					if(pullType == 1){
						// 下拉
						this.tabList[0].data = res.proList;
						this.isNull = res.proList.length>0;
					}else{
						// 上拉
						if(res.proList.length == 0){
							this.$toast("没有更多内容了！")
							callback && callback(false)
						}else{
							this.tabList[0].data = this.tabList[0].data.concat(res.proList);
						}
					}
					callback && callback(true);
				}, (err) => {callback && callback(false)});
			},
			// 获得供应商列表
			getSupplierList(info,pullType,callback){
				this.$abyApi.Supplier.getSupplierListByKeyWord(info, (res) => {
					if(pullType == 1){
						// 下拉
						this.tabList[1].data = res.cpBasicList;
						this.isNull = res.cpBasicList.length>0;
					}else{
						// 上拉
						if(res.cpBasicList.length == 0){
							this.$toast("没有更多内容了！")
							callback && callback(false)
						}else{
							this.tabList[1].data = this.tabList[1].data.concat(res.cpBasicList);
						}
					}
					callback && callback(true);
				}, (err) => {callback && callback(false)});
			},
		},
		mounted() {
		},
	};
</script>

<style scoped>
	.line-button {
		height: 80px;
	}
	.aby-top-fixed{
		width: 100%;
	}
</style>
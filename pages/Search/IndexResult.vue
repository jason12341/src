<template>
	<div class="page">
		<aby-header title="" slot="header" page="2">
			<aby-back @click.native="goBack" slot="back"></aby-back>
			<header-search slot="hSearch" :placeholder="keyword" @eventSearch="eventSearchBack"></header-search>
			<aby-fonts slot="right" class="aby-mui-bar mui-pull-right" title="搜索" @click.native="onSearch"></aby-fonts>
		</aby-header>
		<div class="mui-content">
			<aby-tab slot="navbar_1" :list="tabList" @eventTabBack="eventTab" :actSelect="tabSelectId" class="aby-top-fixed">
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
						id:0,
						title: '产品',
						type: 'line',
						data: []
					},
					{
						id:1,
						title: '供应商',
						type: 'supplier',
						data: []
					},
				],
				pageNumLine: 0,
				pageNumSupplier: 0,
				orderBy: 1,
				lists: [],
				type: '',//搜索类型
				keyword: '',//关键字
				tabSelectId:'',// tab默认选中
				tabSelect:'',// tab默认选中
			};
		},
		methods: {
			scroll(top) {},
			init(){
				this.type = this.$route.params.type;
				this.keyword = this.$route.params.keyword;
				this.tabSelect = this.$route.params.tabSelect||'line';
				this.tabSelectId = this.$route.params.tabSelectId||0;
				if(this.$route.params.tabSelect == 'line'){
					this.tabList = [
						{
							id:0,
							title: '产品',
							type: 'line',
							data: []
						},
						{
							id:1,
							title: '供应商',
							type: 'supplier',
							data: []
						}
					];
				}else{
					this.tabList = [
						{
							id:1,
							title: '供应商',
							type: 'supplier',
							data: []
						},
						{
							id:0,
							title: '产品',
							type: 'line',
							data: []
						},
					];
				}
				this.getList();
			},
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
			// 搜索按钮
			onSearch(){
				this.getList();
			},
			getList(){
				let reqInfo = {};
					reqInfo.keyWord = this.keyword;
					reqInfo.orderBy = this.orderBy;
					reqInfo.loading = 1;
					reqInfo.where = this.where;
					
				reqInfo.pageNum = this.pageNumLine = 1;
				this.getLineList(reqInfo,1);
				
				reqInfo.pageNum = this.pageNumSupplier = 1;
				this.getSupplierList(reqInfo,1);
			},
			// 上推返回监听
			eventinfiniter(e,callback){
				let reqInfo = {};
					reqInfo.keyWord = this.keyword;
					reqInfo.orderBy = this.orderBy;
					reqInfo.loading = 1;
					reqInfo.where = this.where;
				if(this.tabSelect == 'line' && e == this.tabSelect){
					reqInfo.pageNum = this.pageNumLine = ++this.pageNumLine;
					this.getLineList(reqInfo,2,(res)=>{callback && callback(res)});
				}else if(this.tabSelect == 'supplier' && e == this.tabSelect){
					reqInfo.pageNum = this.pageNumSupplier = ++this.pageNumSupplier;
					this.getSupplierList(reqInfo,2,(res)=>{callback && callback(res)});
				}
			},
			// 获取线路详情
			getLineList(info,pullType,callback){
				this.$abyApi.Project.getLineListByKeyWord(info, (res) => {
					if(pullType == 1){
						// 下拉
						this.tabList[0].data = res.proList;
						this.isNull = res.proList.length>0;
						callback && callback(this.isNull);
					}else{
						// 上拉
						if(res.proList.length == 0){
							console.log(res.proList.length)
							this.$toast("没有更多内容了！")
							callback && callback(false)
						}else{
							this.tabList[0].data = this.tabList[0].data.concat(res.proList);
							callback && callback(true);
						}
					}
				}, (err) => {callback && callback(false)});
			},
			// 获得供应商列表
			getSupplierList(info,pullType,callback){
				this.$abyApi.Supplier.getSupplierListByKeyWord(info, (res) => {
					if(pullType == 1){
						// 下拉
						this.tabList[1].data = res.cpBasicList;
						this.isNull = res.cpBasicList.length>0;
						callback && callback(this.isNull);
					}else{
						// 上拉
						if(res.cpBasicList.length == 0){
							this.$toast("没有更多内容了！")
							callback && callback(false)
						}else{
							this.tabList[1].data = this.tabList[1].data.concat(res.cpBasicList);
							callback && callback(true);
						}
					}
				}, (err) => {callback && callback(false)});
			},
		},
		mounted() {
		},
		beforeRouteEnter(to, from, next) {
			if(from.name == 'searchIndex') {
				next(vm => {
					vm.init();
				})
			}else{
				next()
			}
		},
		beforeRouteLeave(to, from, next) {
			if(to.name == 'home') {
				to.meta.noKeepAlive = true;
				from.meta.noKeepAlive = true;
				this.keyword = '';
				this.pageNumLine = 0;
				this.pageNumSupplier = 0;
				this.tabSelect = 'line';
				this.tabSelectId = 0;
				this.tabList[0].data = [];
				this.tabList[1].data = [];
			} else {
				to.meta.noKeepAlive = true;
				from.meta.noKeepAlive = false;
			}
			next();
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
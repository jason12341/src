<template>
	<div>
		<mt-search v-model="value" cancel-text="取消" @keyup.enter.native="onSearch" placeholder="搜索">
			<div class="type-page-item  keyWordBtn" v-for="(li,i) in list" :key="i">
				<div class="mui-pull-left page-item-content aby-font-Black" @click="onSearchType(li.keyword,li.searchType)">
					{{li.keyWordDescribe}}
				</div>
			</div>
			<br style="clear: both;" />
		</mt-search>
		<div>
			<h5>搜索历史</h5>
			<div>
				<span v-for="s in searchList" @click="onRecord(s)">{{s}}</span>
			</div>
		</div>
		
		<div>
			<h5>猜你喜欢</h5>
			
		</div>
	</div>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				value: '',
				searchType:this.$route.params.type,
				list:[],
				searchList:[],//搜索记录
			}
		},
		methods: {
			// 根据输入内容显示搜索类型
			searchProTypeList(){
				let reqInfo = {};
				reqInfo.loading = 1;
				reqInfo.keyWord = this.value;
				reqInfo.searchType = this.searchType;
				this.$abyApi.Project.getSearchTypeByKeyWord(reqInfo,(res)=>{
					this.list = res.seachTypeList;
				});
			},
			// 键盘搜索按钮事件
			onSearch(){
				this.toResult();
			},
			// 搜索类型点击事件
			onSearchType(value,type){
				this.$router.replace({
					name: 'searchResult',
					params: {
						type: type,
						keyword:value
					}
				});
			},
			// 点击记录
			onRecord(key){
				this.value = key;
				this.toResult();
			},
			// 跳转
			toResult(){
				this.$router.replace({
					name: 'searchResult',
					params: {
						type: this.searchType,
						keyword:this.value,
					}
				});
			}
		},
		mounted() {
			this.searchList = this.$tool.localStorage.getSearch();
		},
		watch:{
			value(val){
				if(val !== '')this.searchProTypeList();
			}
		}
	}
</script>

<style scoped>
	.mint-search{
		height: 80%;
	}
	.type-page-item {
       overflow: hidden;
       padding: 10px;
       background-color: #FFFFFF;
       border-bottom: 1px solid #AEAEAE;
   }
   .page-item-content {
       padding-left: 10px;
       border-radius: 4px;
   }
   .blue {
       color: #99cb22!important;
   }
</style>
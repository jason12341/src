<template>
	<aby-page>
		<aby-header title="店铺主页" slot="header"></aby-header>
		<div class="mui-content" slot="content">
			<!--个人信息部分-->
			<ul class="mui-table-view mui-table-view-chevron" style="margin-top: 1px;">
				<li class="mui-table-view-cell mui-media">
					<img class="mui-media-object mui-pull-left" src="../../static/images/ico/ico_wechat.png">
					<div class="mui-media-body">
						杜小甫
						<p class='mui-ellipsis'>南京牛气冲天国际旅行社</p>
						<img class="aby-img-Authentication" src="../../static/images/example/ID.jpg" />
						<img class="aby-img-Authentication" src="../../static/images/example/ID.jpg" />
					</div>
				</li>
			</ul>
			<div class="space"></div>
			<aby-tab :list="tabList" page="homepage" slot="tab">
				<div v-for="(li,i) in tabList" :key="i" :slot="'selectContent'+i">
					<aby-list v-if="li.type=='line'"></aby-list>
					<aby-information v-if="li.type=='infor'"></aby-information>
					<aby-contacts v-if="li.type=='contacts'"></aby-contacts>
				</div>
			</aby-tab>

		</div>
	</aby-page>
</template>

<script>
	import AbyInformation from './Informatica.vue'
	import AbyContacts from './Contacts.vue'
	import AbyList from '../../components/List/Line.vue'
	export default {
		components: {
			AbyInformation,
			AbyContacts,
			AbyList
		},
		data() {
			return {
				tabList: [{
						id: 'line',
						title: '店铺产品',
						type: 'line',
						data: '',
					},
					{
						id: 'infor',
						title: '企业信息',
						type: 'infor',
						data: ''
					},
					{
						id: 'contacts',
						title: '联系人',
						type: 'contacts',
						data: ''
					},
				],
			}
		},
		methods: {

		},
		mounted() {

		},
	}
</script>

<style scoped>
	.mui-table-view .mui-media-object {
		line-height: 60px;
		max-width: 60px;
		height: 60px;
	}
	.mui-media-body{
		font-size: 16px;
	}
</style>
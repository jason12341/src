<template>
	<div class="list-item">
		<!--导游列表-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="i">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left aby-img-guide" :src="item.cpLogo">
					<div class="mui-media-body aby-list">
						<p class="aby-list-title">{{item.cpName}}</p>
						<p class="mui-ellipsis">
							<aby-icon className="mui-pull-right" type="location"></aby-icon>
							{{item.cpCityName}}
						</p>
						<p class="mui-ellipsis" v-if="item.cpRoute.length>0">
							营业范围：{{item.cpRoute|filterListToString}}
						</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: ['list'],
		data() {
			return {}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>
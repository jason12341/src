<template>
	<div class="list-item" style="top: 40px;">
		<!--导游列表-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="(item,i) in lists">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left aby-img-guide" :src="item.aac007">
					<div class="mui-media-body aby-list">
						<p class="aby-list-title">{{item.aac003}}</p>
						<p class="mui-ellipsis">
							<aby-icon className="mui-pull-right" type="location"></aby-icon>
							{{item.aac204}}
						</p>
						<p class="mui-ellipsis">
							业务范围：{{item.vsBranched|filterListToString}}
						</p>
						<p class="mui-ellipsis">
							服务线路：{{item.vsRoadLines||'未设置'}}
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
			return {
				lists:[],
			}
		},
		methods: {
			
		},
		mounted() {
		},
		watch: {  
		    list(val){
		    	this.lists = val;
		    }  
		}  
	}
</script>

<style>
</style>
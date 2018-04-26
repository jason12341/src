<template>
	<div>
		<div class="divSure">
			<span class="btnSure" @click="onConfirm">确定</span>
		</div>
		<picker v-for="(li,i) in slotsList" :key="i" :slots="li" @change="onValuesChange" value-key="text">	
		</picker>
	</div>
</template>

<script>
	import { Picker } from 'mint-ui'
	
	export default {
		components: {
			Picker
		},
		props: ['list','id'],
		data() {
			return {
				slots: [{
					flex: 1,
					values: '',
					className: 'slot1',
					textAlign: 'center'
				}],
				slotsList:[],
				selected:''
			}
		},
		methods: {
			onValuesChange(picker, values) {
				if(values){
					this.selected = values[0];
				}
			},
			onConfirm(){
				this.$emit('onConfirm',this.selected);
			}
		},
		mounted() {
			let info = {};
			info.flex = 1;
			info.values = this.list;
			info.className = 'slot1';
			info.textAlign = 'center';
			let arr = [];
			arr.push(info)
			this.slotsList.push(arr)
		},
		watch: {
			list(val){
				this.slots[0].values = val;
			}
		}
	}
</script>

<style scoped>
	.divSure{
		border-bottom: 1px solid #F0F0F0;
		position: relative;
		height: 45px;
	}
	.btnSure{
		position: absolute;
		right: 10px;
		top: 10px;
		background-color: #08C7B5;
		padding: 3px 10px;
		border-radius: 4px;
		color: #FFFFFF;
		font-size: 12px;
	}
</style>
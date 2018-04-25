<template>
	<div>
		<div class="divSure">
			<span class="btnSure" @click="onConfirm">确定</span>
		</div>
		<picker :slots="slots" @change="onValuesChange" value-key="text">	
		</picker>
	</div>
</template>

<script>
	import { Picker } from 'mint-ui'
	
	export default {
		components: {
			Picker
		},
		props: ['list'],
		data() {
			return {
				slots: [{
					flex: 1,
					values: this.list,
					className: 'slot1',
					textAlign: 'center'
				}],
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
		mounted() {},
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
<template>
	<div class="field">
		<slot name="icon">
			<!--<i id="iconLabel" :class="iclass"></i>-->
		</slot>
		<slot name="label"></slot>
		<slot name="input">
			<mt-field :placeholder="dplaceholder" :type="dtype" v-model="dmodelVal" :class="dClass" :rows="drows" disabled disableClear v-if="ddisabled&&ddisableClear"></mt-field>
			<mt-field :placeholder="dplaceholder" :type="dtype" v-model="dmodelVal" :class="dClass" :rows="drows" v-if="!ddisabled&&!ddisableClear"></mt-field>
			<mt-field :placeholder="dplaceholder" :type="dtype" v-model="dmodelVal" :class="dClass" :rows="drows" disableClear v-if="!ddisabled&&ddisableClear"></mt-field>
			<mt-field :placeholder="dplaceholder" :type="dtype" v-model="dmodelVal" :class="dClass" :rows="drows" disabled v-if="ddisabled&&!ddisableClear"></mt-field>
		</slot>
		<slot name="allowRight">
			<!--<i class="mint-cell-allow-right"></i>-->
		</slot>
	</div>
</template>

<script>
	export default {
		components: {},
		props: ['placeholder', 'type', 'className', 'iclassName', 'disabled', 'modelId', 'disableClear', 'rows','modelVal'],
		data() {
			return {
				dlabelName: this.title || '',
				dmodelVal: this.modelVal||'',
				dClass: this.className,
				iclass: this.iclassName,
				dplaceholder: this.placeholder,
				dtype: this.type,
				ddisabled: this.disabled || false,
				ddisableClear: this.disableClear || false,
				drows: this.rows || '1',
			}
		},
		methods: {

		},
		mounted() {
			
		},
		watch: {
			title(val) {
				this.dlabelName = val
			},
			dmodelVal(val) {
				this.dmodelVal = val;
				if(this.modelId){
					let list = this.modelId.split('.');
					if(list.length == 1){
						this.$parent[this.modelId] = val;
						this.$parent.$parent[this.modelId] = val;
					}else if(list.length == 2){
						if(this.$parent[list[0]])this.$parent[list[0]][list[1]] = val;
						if(this.$parent.$parent[list[0]])this.$parent.$parent[list[0]][list[1]] = val;
					}else if(list.length == 3){
						if(this.$parent[list[0]])this.$parent[list[0]][list[1]][list[2]] = val;
						if(this.$parent.$parent[list[0]])this.$parent.$parent[list[0]][list[1]][list[2]] = val;
					}
				}
			},
			modelVal(val){
				this.dmodelVal = val;
			},
			placeholder(val){
				this.dplaceholder = val;
			},
			type(val){
				this.dtype = val;
			}
		}
	}
</script>

<style scoped>
	.field .mint-cell {
		background: rgba(288, 255, 255, 0);
	}
</style>
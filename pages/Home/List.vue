<template>
	<div class="list">
		<aby-header></aby-header>
		<p>This is the <b>list</b> page</p>
		<p>random number: {{random}}</p>
		<input type="text" name="" id="" value="" />
		<p v-for="n in 30" :key="n">
			<router-link :to="'list/'+n">go to detail page(id: {{n}})</router-link>
		</p>

	</div>
</template>

<script>
	import AbyHeader from '../../components/Header/Default.vue'
	export default {
		components: {
			AbyHeader
		},
		data() {
			return {
				random: Math.random().toFixed(4)
			}
		},
		activated() {
			console.log('list activated')
		},
		deactivated() {
			console.log('list deactivated')
		},
		destroyed() {
			console.log('list destroyed')
		}
	}
</script>

<template>
	<div class="page" :class="page=='index'?'pt-45':''">
		<slot name="header"></slot>
		<div class="mui-content">
			<div class="page-loadmore">
				<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }" @scroll="paperScroll" id="wrapper">
					<slot name="navbar"><div style="padding-top: 45px;"></div></slot>
					<slot name="explain"></slot>
					<mt-loadmore ref="loadmore" :top-method="loadTop" :autoFill="loading" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded">
						<div style="min-height: 500px;">
							<slot name="loadlist"></slot>
						</div>
					</mt-loadmore>
						
					<div class="line-button"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title','page'],
		components: {},
		data() {
			return {
				pageId: '',
				list: [],
				// 下拉
				topStatus: '',
				wrapperHeight: 0,
				translate: 0,
				moveTranslate: 0,
				loading: false,
				// 下拉
				allLoaded: false,
				bottomStatus: '',
				wrapperHeight: 0,

				noContent: false,
				scrollTop: 0,
				isDeactivated: false,
			};
		},

		methods: {
			handleBottomChange(status) {
				this.bottomStatus = status;
			},
			paperScroll() {
				let tpScrollTop = document.getElementById('wrapper').scrollTop;
				this.scrollTop = tpScrollTop;
				this.$parent.scroll(tpScrollTop);
				if(this.$parent.$refs.navbar) {
					this.$parent.$refs.navbar.scroll(tpScrollTop);
				}
			},
			handleTopChange(status) {
				this.moveTranslate = 1;
				this.topStatus = status;
			},
			translateChange(translate) {
				const translateNum = +translate;
				this.translate = translateNum.toFixed(2);
				this.moveTranslate = (1 + translateNum / 70).toFixed(2);
			},
			// 下拉
			loadTop() {
				setTimeout(() => {
					this.$parent.getPullDown((ret) => {
						this.$refs.loadmore.onTopLoaded();
					});
				}, 2500);
			},
			// 上推
			loadBottom() {
				setTimeout(() => {
					this.$parent.getPullUp((ret) => {
						if(ret.length == 0){
							this.$tool.toast('没有更多内容了');
						}
						this.allLoaded = false;
						this.$refs.loadmore.onBottomLoaded();
					});
				}, 1500);
			},
		},
		mounted() {
			this.wrapperHeight = document.documentElement.clientHeight;
			document.getElementById('wrapper').scrollTop = 0;
		},
		activated() {
			document.getElementById('wrapper').scrollTop = this.$parent.scrollTop;
		},
		deactivated() {},
	};
</script>

<style scoped>
	.line-button {
		height: 80px;
	}
</style>
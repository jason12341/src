<template>
	<aby-page>
		<aby-header title="关于我们" slot="header"></aby-header>
		<div slot="content" class="mui-content">
			<div class="about-logo">
				<div class="about-logo-img">
					<img src="../../static/images/status/about-logo.png" />
				</div>
				<h3>抱团赢天下</h3>
				<p class="version" id="versionTxt">{{versionTxt}}</p>
			</div>
			<div class="about-message">
				<p class="item">呱啦啦同业的成长离不开大家的关注与支持，希望大家多和我们交流，多提意见和建议。</p>
				<p class="item">微信公众号：gllb2b / lytyhome</p>
				<p class="item">微信客服号：efghED</p>
				<p class="item">邮箱：gualala@ai-by.com</p>
				<p class="item">广告：15150581177</p>
			</div>
			<div class="about-bottom">
				<div class="agreements">
					<a id="cooperationAgreement">注册协议</a> |
					<a id="paymentAgreement">服务协议</a>
				</div>
				<div class="copyright">
					<p class="item">南京爱伴游网络科技有限公司&nbsp;版权所有</p>
					<p class="item">&copy;&nbsp;2015-2018&nbsp;苏ICP备15054315号</p>
				</div>
			</div>
		</div>
	</aby-page>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				versionTxt: 'V' + this.$store.state.version || '',
			}
		},
		methods: {},
		mounted() {},
	}
</script>

<style scoped>
	.mui-content,
	html,
	body {
		background-color: #FFFFFF;
	}
	
	.mui-content {
		padding: 20px;
	}
	
	.about-logo {
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	
	.about-logo .about-logo-img img {
		width: 90px;
		margin-bottom: 5px;
	}
	
	.about-logo h3 {
		color: #316162;
		font-weight: normal;
		margin-bottom: 8px;
		font-size: 22px;
	}
	
	.about-message .item {
		color: #333;
		font-size: 16px;
		margin-bottom: 5px;
	}
	
	.about-bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;
	}
	
	.about-bottom .agreements {
		color: #94befc;
		margin-bottom: 5px;
	}
	
	.about-bottom .agreements a {
		color: #94befc;
	}
	
	.about-bottom {
		padding: 20px;
	}
	
	.about-bottom .item {
		margin-bottom: 0;
	}
</style>
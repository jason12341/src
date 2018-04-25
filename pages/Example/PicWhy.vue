<template>
	<aby-page>
		<aby-header title="为什么要传照片" slot="header"></aby-header>
		<div slot="content" class="mui-content example">
			<p>为了保障旅游同业平台的信息安全,为旅游同业者创造诚信的合作环境,呱啦啦同业提供了严格完善的认证体系。</p>
			<p>营业执照证明您的企业的合法性,名片证明您在该企业任职,身份证证明注册人真实存在.所以,名片与企业必须是同一家公司,名片与身份证必须是同一个人。</p>
			<div class="title">
				1. 没有名片怎么办?
			</div>
			<p>在名片栏上传法人身份证，或者提供工作牌、在职证明等证明即可（企业法人可以不提供名片，只提供营业执照和法人身份证照）</p>
			<div class="title">
				2. 企业挂靠在其他公司,名片与营业执照企业不符怎么办？
			</div>
			<p>可使用挂靠所在企业的营业执照,或者在营业执照附加相关挂靠证明</p>
			<div class="title">
				3. 电子名片可以用吗?
			</div>
			<p>为保证相关证件的真实有效性,必须上传实体证件照片</p>
		</div>
	</aby-page>
</template>

<script>
</script>

<style scoped>
	.example {
		color: #555555;
		padding: 0px 15px 0px 15px;
		word-wrap: break-word;
		word-break: normal;
		text-align: justify;
		margin-top: 40px;
		background-color: #FFFFFF;
	}
	
	.imgExample {
		width: 100%;
		margin: 10px 0px 20px 0px;
	}
	
	.title {
		margin-bottom: 10px;
		color: #ee4745;
		font-size: 14px;
		/*padding-left: 22px;*/
		/*margin-top: -2px;*/
	}
	
	.num {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 1px solid #ee4745;
		color: #ee4745;
		padding: 0px 4px;
		line-height: 16px;
		position: absolute;
		font-size: 10px;
	}
	
	p {
		color: #333333;
		font-size: 13px;
	}
</style>
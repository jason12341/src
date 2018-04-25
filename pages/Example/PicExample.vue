<template>
	<aby-page>
		<aby-header title="上传照片示例" slot="header"></aby-header>
		<div slot="content" class="mui-content example">
			<div class="title">
				<span>1</span>营业执照示例图
			</div>
			<img class="imgExample" src="../../static/images/example/lisense.jpg" />
			<div class="title">
				<span>2</span>身份证示例图
			</div>
			<img class="imgExample" src="../../static/images/example/ID.jpg" />
			<div class="title">
				<span>3</span>名片示例图
			</div>
			<img class="imgExample" src="../../static/images/example/card.jpg" />
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
	
	.title span {
		display: inline-block;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 1px solid #ee4745;
		color: #ee4745;
		padding: 2px 7px;
		margin-right: 8px;
	}
</style>
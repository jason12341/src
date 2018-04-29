<template>
	<aby-page>
		<aby-header slot="header">
			<div slot="title">
				<h1 class="mui-title">李小白</h1>
				<h6 class="business">南京爱伴游网络科技有限公司</h6>
			</div>
			<aby-icon class="mui-icon mui-pull-right icon-chatsetting" slot="right" type="chatsetting"></aby-icon>
		</aby-header>
		<div class="mui-content" slot="content">
			<div id='msg-list'>
				<div class="msg-item" v-for="(li,i) in msgList" :key="i" :class="li.messageDirection == 1 ? 'msg-item-self' : ''">
					<img class="msg-user-img msg-user mui-icon selfHead" :src="li.sendUser.userFace" alt="" />
					<div class="msg-content">
						<div class="msg-content-inner" v-if="li.content.messageName=='TextMessage'">
							{{toFaceHtml(li.content.content)}}
						</div>
						<div class="msg-content-inner" v-if="li.content.messageName=='ImageMessage'">
							<img :src="li.content.content" id="imgMessage" data-preview-src="${item.content.imageUri}" data-preview-group="1">
						</div>
						<div class="msg-content-arrow"></div>
					</div>
					<span class="mui-spinner sendStatus"></span> 
					<div class="mui-item-clear"></div>
				</div>
			</div>
		</div>
		<div slot="footer">
			<footer ref="footer">
				<div class="footer-center">
					<textarea v-model="msgtext" @focus="focus" type="text" class='input-text'></textarea>
				</div>
				<label class="footer-right">
					<aby-icon class="mui-icon icon-face" type="chatface" @click.native="onFace"></aby-icon>
					<aby-icon class="mui-icon icon-plus" type="chatplus" @click.native="onMore" v-show="msgtext==''"></aby-icon>
					<aby-icon class="mui-icon icon-face" type="hotel" @click.native="onSend" v-show="msgtext!=''"></aby-icon>
				</label>
			</footer>
			<div class="tool_panel" v-show="isShowFace" v-html="faceArr" @click="onFaceTip($event)"></div>
			<div class="tool_else_panel" v-show="isShowMore">
				<aby-icon class="mui-icon icon-face" type="chatpic" @click.native="onCamera"></aby-icon>图片
			</div>
		</div>
	</aby-page>
</template>

<script>
	require('../../static/lib/RongImLib/RongEmoji-2.2.6.min.js')
	require('../../static/lib/RongImLib/RongIMLib-2.3.1.min.js')
	export default {
		components: {
		},
		data() {
			return {
				isShowFace:false,//是否显示表情
				isShowMore:false,//是否显示更多按钮
				faceArr:[],
				msgtext:'',//消息内容
				userId:'',//用户ID
				userInfo:'',//用户信息
				msgList:[],//消息列表
			}
		},
		methods:{
			init(){
				// 初始化融云
				RongIMLib.RongIMEmoji.init();
				let emijiArrr = RongIMLib.RongIMEmoji.emojis;// 获取表情列表
				var emojiArrHtml = "";
				for(var i in emijiArrr) {
					emojiArrHtml = emojiArrHtml + emijiArrr[i].innerHTML;
				}
				this.faceArr = emojiArrHtml;
			},
			// 表情转换
			toFaceHtml(data){
				return abyChat.receiveEmojiMsg(data);
			},
			// 点击表情按钮
			onFace(){
				if(this.isShowFace){
					this.$refs.footer.className = '';
					this.isShowFace = false;
					this.isShowMore = false;
				}else{
					this.$refs.footer.className = 'editFooter';
					this.isShowFace = true;
					this.isShowMore = false;
				}
			},
			// 点击更多按钮
			onMore(){
				if(this.isShowMore){
					this.$refs.footer.className = '';
					this.isShowFace = false;
					this.isShowMore = false;
				}else{
					this.$refs.footer.className = 'editFooter';
					this.isShowFace = false;
					this.isShowMore = true;
				}
			},
			// 表情选择
			onFaceTip(e){
				let emoji = e.target.parentNode.getAttribute("name");
				emoji = RongIMLib.RongIMEmoji.symbolToEmoji(emoji);
				this.msgtext = this.msgtext + emoji;
			},
			// 点击相机
			onCamera(){
				this.$tool.getPhoto((file) => {
					
				});
			},
			// 输入框获得焦点
			focus(){
				this.$refs.footer.className = '';
				this.isShowFace = false;
				this.isShowMore = false;
			},
			// 发送消息
			onSend(){
				this.msgtext = '';
			},
			// 获得用户信息
			getUserInfo(){
				let reqInfo = { userId:this.userId };
				this.$abyApi.User.getBasciInfo(reqInfo,(res)=>{
					this.userInfo = res.cpUserInfo;
				});
			}
		},
		mounted() {
			this.init();
		},
	}
</script>

<style scoped>
	html,
	body {
		height: 100%;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
	}
	
	.mui-title {
		line-height: 30px;
	}
	
	.business {
		display: inline-block;
		right: 40px;
		left: 40px;
		overflow: hidden;
		width: auto;
		margin: 27px 0 0 0;
		text-overflow: ellipsis;
		margin-left: -22px;
	}
	
	.icon-face,
	.icon-plus {
		font-size: 28px;
	}
	
	.icon-chatsetting {
		font-size: 22px;
		color: #707070;
		position: absolute;
		right: 10px;
		top: 0px;
	}
	
	footer {
		position: fixed;
		width: 100%;
		height: 50px;
		min-height: 50px;
		border-top: solid 1px #F0F0F0;
		left: 0px;
		bottom: 0px;
		overflow: hidden;
		padding: 0px 80px 0 10px;
		background-color: #fafafa;
	}
	
	.footer-right {
		position: absolute;
		width: 80px;
		height: 50px;
		right: 0px;
		bottom: 0px;
		text-align: center;
		vertical-align: middle;
		line-height: 100%;
		padding: 12px 5px;
		display: inline-block;
	}
	
	.footer-center {
		height: 100%;
		padding: 8px 0px;
	}
	
	.footer-center [class*=input] {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	
	.footer-center .input-text {
		background: #F0F0F0;
		border: solid 1px #F0F0F0;
		padding: 10px !important;
		font-size: 14px !important;
		line-height: 12px !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15px;
	}
	
	.footer-center .input-sound {
		background-color: #eee;
	}
	
	.mui-content {
		height: 100%;
		padding: 44px 0px 50px 0px;
		overflow: auto;
	}
	
	#msg-list {
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.msg-item {
		padding: 8px;
		clear: both;
	}
	
	.msg-item .mui-item-clear {
		clear: both;
	}
	
	.msg-item .msg-user {
		width: 38px;
		height: 38px;
		border: solid 1px #d3d3d3;
		display: inline-block;
		background: #fff;
		border-radius: 3px;
		vertical-align: top;
		text-align: center;
		float: left;
		padding: 3px;
		color: #ddd;
	}
	
	.msg-item .msg-user-img {
		width: 38px;
		height: 38px;
		display: inline-block;
		border-radius: 3px;
		vertical-align: top;
		text-align: center;
		float: left;
		color: #ddd;
	}
	
	.msg-item .msg-content {
		display: inline-block;
		border-radius: 5px;
		border: solid 1px #d3d3d3;
		background-color: #FFFFFF;
		color: #333;
		padding: 8px;
		vertical-align: top;
		font-size: 15px;
		position: relative;
		margin: 0px 8px;
		max-width: 75%;
		min-width: 35px;
		float: left;
	}
	
	.msg-item .msg-content .msg-content-inner {
		overflow-x: hidden;
	}
	
	.msg-item .msg-content .msg-content-arrow {
		position: absolute;
		border: solid 1px #d3d3d3;
		border-right: none;
		border-top: none;
		background-color: #FFFFFF;
		width: 10px;
		height: 10px;
		left: -5px;
		top: 12px;
		-webkit-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
	}
	
	.msg-item-self .msg-user,
	.msg-item-self .msg-content {
		float: right;
	}
	
	.msg-item-self .msg-content .msg-content-arrow {
		left: auto;
		right: -5px;
		-webkit-transform: rotateZ(225deg);
		transform: rotateZ(225deg);
	}
	
	.msg-item-self .msg-content,
	.msg-item-self .msg-content .msg-content-arrow {
		background-color: #4CD964;
		color: #fff;
		border-color: #2AC845;
	}
	
	footer .mui-icon {
		color: #000;
	}
	
	footer .mui-icon:active {
		color: #007AFF !important;
	}
	
	footer .mui-icon-paperplane:before {
		content: "发送";
	}
	
	footer .mui-icon-paperplane {
		font-size: 16px;
		word-break: keep-all;
		line-height: 100%;
		padding-top: 6px;
		color: rgba(0, 135, 250, 1);
	}
	.tool_else_panel,
	.tool_panel {
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    padding: 2px;
	    width: 100%;
	    height: 150px;
	    overflow-y: scroll;
	}
	.editFooter {
		bottom: 150px!important;
		position: fixed!important;
	}
</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1,
	pageDirection: 'fade',
	routeChain: [],
	tabActive:'',
	
	abyTel:'025-68132329',//客服电话
	
	loginState: false,
	osType: window.localStorage.getItem('osType')?window.localStorage.getItem('osType'):'',
	deviceId: window.localStorage.getItem('deviceId')?window.localStorage.getItem('deviceId'):'',
	version: window.localStorage.getItem('version')?window.localStorage.getItem('version'):'',
	chat_token:'',
	
	user_token: window.localStorage.getItem('user_token')?window.localStorage.getItem('user_token'):'',
	
	cpUserInfo: '',userId: '',userName: '',userType: '',userPhone: '',
	
	cpId: '',cpBtype: '',cpBasic:'',
}

// 同步加载
const mutations = {
	addRouteChain(state, route) {
		let isAdd = true;
		state.routeChain.forEach((value,index)=>{
			if(value.name === route.name)isAdd = false;
		});
		if(isAdd)state.routeChain.push(route);
	},
	popRouteChain(state) {
		state.routeChain.pop();
	},
	delRouteChain(state,route){
		state.routeChain.forEach((value,index)=>{
			if(value.name === route.name)state.routeChain.pop(value);
		});
	},
	setPageDirection(state, dir) {
		state.pageDirection = dir;
	},
	// 设置用户信息
	setUserInfo(state, info){
		state.loginState = true;
		state.user_token = info.user_token;
		state.chat_token = info.chat_token;
		state.cpUserInfo = info.cpUserInfo;
		state.userId = info.cpUserInfo.userId;
		state.userName = info.cpUserInfo.userName;
		state.userType = info.cpUserInfo.userType;
		state.userPhone = info.cpUserInfo.userPhone;
		state.cpId = info.cpUserInfo.cpId;
		state.cpBasic = info.cpUserInfo.cpBasic;
		state.cpBtype = info.cpUserInfo.cpBasic.cpBtype;
	},
	// 设置token
	setUserToken(state,token){
		state.user_token = token;
	},
	// 单独设置基本信息
	setStateInfo(state,info){
		switch(info.title){
			case 'deviceId':state.deviceId = info.value;break;
			case 'version':state.version = info.value;break;
			case 'osType':state.osType = info.value;break;
			case 'tabActive':state.tabActive = info.value;break;
		}
	},
	// 清空用户基本信息
	clearState(state){
		state.loginState = false;
		state.user_token = state.chat_token = state.cpUserInfo = 
		state.userId = state.userName = state.userType = state.userPhone = 
		state.cpId = state.cpBasic = state.cpBtype = '';
		state.routeChain = [];
		state.pageDirection = 'fade';
	}
	
}

// 异步加载
const actions = {
	addAction(context) {
		context.commit('add', 10)
	},
	reduceAction({
		commit
	}) {
		commit('reduce')
	}
}

// 计算属性
const getters = {
	count: function(state) {
		return state.count += 100;
	}
}

export default new Vuex.Store({
	state,mutations,getters
})
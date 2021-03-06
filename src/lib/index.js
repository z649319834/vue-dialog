import dialog from "./vue-dialog.vue"

let CONFIG_DEFAULT={
	type:false,
	isShow:false,
	isclose:false,
	dialog:{
		cssClass:"",
		style:{}
	},
	title:{
		text:"",
		cssClass:"",
		style:{}
	},
	message:{
		text:"",
		cssClass:"",
		style:{}
	},
	btnBody:{
		text:"",
		cssClass:"",
		style:{}
	},
	buttons:[
		{
			text:"确定",
			style:{},
			cssClass:"",
			callBack:null
		}
	],
	delay:2000,
	delayFn:null,
	initFn:null
};

let tpl;

const Show=function(config={}){
	config={
		...CONFIG_DEFAULT,
		...config
	}
	for(let key in config){
		if(config.hasOwnProperty(key)){
			tpl.$data[key]=config[key];
		}
	}
	tpl.$data.isShow=true;
}

const Hide=function(){
	tpl.$data.isShow=false;
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(paykeyboard); 
}

export default {
	install:function(Vue){
		let Tpl_dia=Vue.extend(dialog);
		tpl=new Tpl_dia();
		tpl.el=tpl.$mount().$el;
		document.body.appendChild(tpl.el);
		Vue.prototype.$dialog=Show.bind(Vue);
		Vue.prototype.$dialog["hide"]=Hide;
	}
};
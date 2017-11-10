# vue-dialog-zcz

> vue弹层组件[Github:https://github.com/z649319834/vue-dialog.git](https://github.com/z649319834/vue-dialog.git)

## Install

	npm install vue-dialog-zcz --save-dev

## Quick Start

	import Vue from "vue"

	import VueDialog from "vue-dialog-zcz"

	Vue.use(VueDialog)


## Methods

	this.$dialog({
		// Boolean,弹层类型，false为alert类型，true为tips类型(自动隐藏)
		type:false,
		
		// Boolean,关闭按钮是否显示
		isclose:false,

		// Object,弹层外框设置对象
		dialog:{
			cssClass:"",
			style:{}
		},
		
		//Object,标题设置对象
		title:{
			text:"",
			cssClass:"",
			style:{}
		},

		// Object,主体信息设置对象
		message:{
			text:"",
			cssClass:"",
			style:{}
		},

		// Object,按钮外框设置对象
		btnBody:{
			cssClass:"",
			style:{}
		},

		// Array,操作按钮设置对象
		buttons:[
			{
				text:"确定",
				style:{},
				cssClass:"",
				callBack:null
			}
		],

		// Number,tips类型延时设置
		delay:2000,

		// Function, tips回调执行函数
		delayFn:null,

		// Funtion, 初始化回调执行函数
		initFn:null,

		// Function, 关闭按钮回调执行函数
		closeFn:null,
	})

## LICENSE

MIT
<template>
	<transition name="fadeIn" mode="out-in">
		<div v-if="isShow" class="dialog-layer" @click.prevent="touchmoveHandler">
			<div class="dialog-content" :class="[type?'dialog-tips':'dialog-alert',dialog.cssClass]" :style="dialog.style">
				<span v-show="isclose" class="dialog-close" @click.stop="closeHandler"></span>
				<div v-show="title.text" class="dialog-title" v-text="title.text" :class="title.cssClass" :style="title.style"></div>
				<div class="dialog-msg" v-html="message.text" :class="message.cssClass" :style="message.style"></div>
				<ul v-show="!type&&message.text&&buttons.length" class="dialog-buttons" :class="btnBody.cssClass" :style="btnBody.style">
					<li class="dialog-btn" v-for="(item,index) in buttons" :key="index" @click.prevent="closeHandler(item.callBack)" :class="['dialog-btn'+index%2,item.cssClass]" :style="item.style">{{item.text}}</li>
				</ul>
				<!-- <div v-if="isTips&&!type" class="tips-layer" :style="tips.bodyStyle" :class="tips.bodyCssClass">
					<div class="tips-msg" :style="tips.style" :class="tips.cssClass" v-html="tips.text"></div>
				</div> -->
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name:"vue-dialog",
		data:function(){
			return {
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
				initFn:null,
				closeFn:null,
				/*isTips:false
				tips:{
					bodyStyle:{},
					bodyCssClass:"",
					text:"Tips 消息",
					cssClass:"",
					style:{},
					delay:2000
				}*/
			}
		},
		
		mounted(){

		},
		watch:{
			type(val){
				if(val){
					this.waitShowHandler()
				}
			},
			message(){
				this.$timer=setTimeout(()=>{
					clearTimeout(this.$timer);
					this.initFn && typeof this.initFn && this.initFn(this.closeHandler)
				},100)
				
			}
		},
		methods:{
			closeHandler(){
				this.closeFn && typeof this.closeFn =="function" && this.closeFn();
				this.isShow=false;
			},
			dialogHandler(cb){
				cb && typeof cb =="function" && cb()
				this.closeHandler();
			},
			waitShowHandler(){
				this.$timer=setTimeout(()=>{
					clearTimeout(this.$timer);
					this.closeHandler();
					this.delayFn && typeof this.delayFn =="function" && this.delayFn()
				},this.delay)
			},
			touchmoveHandler(e){
				e.preventDefault();
			}



		}
	}
</script>

<style scoped>
	.fadeIn-enter-active, .fadeIn-leave-active {
	    opacity: 1;
	    transition: all 0.3s ease;
	}

	.fadeIn-enter, .fadeIn-leave-to {
	    opacity: 0;
	}
	.dialog-layer{
		position: fixed;
		top:0;
		left:0;
		z-index: 888;
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.5);
		overflow: hidden;
	}
	.dialog-content{
		position: relative;
		padding:25px 20px;
		width:auto;
		border-radius: 5px;
		background: #fff;
		overflow: hidden;
	}
	.dialog-close{
		position: absolute;
		top:10px;
		right:10px;
		z-index: 10;
		width: 16px;
		height:16px;
		background: url("../images/icon-close.png") no-repeat center center;
		opacity: 0.7;
		cursor: pointer;
	}
	.dialog-close:hover{
		opacity: 1;
	}
	.dialog-title{
		min-width: 500px;
		height:40px;
		line-height: 40px;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border-bottom: 1px solid #eee;
	}
	.dialog-msg{
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		max-width: 500px;
		
	}
	.dialog-tips{
		padding:10px 20px;
		min-width: 200px;		
	}
	.dialog-tips .dialog-msg{
		/*padding:10px 0;*/
	}
	.dialog-alert{
		padding:20px 25px;
	}
	.dialog-alert .dialog-msg{
		padding:10px 0;
		min-height:100px;
	}
	.dialog-buttons{
		margin:0;
		padding:0;
		list-style: none;
		padding:5px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-width: 500px;
		height:50px;
		overflow: hidden;
	}
	.dialog-btn{

		width:140px;
		height:48px;
		text-align: center;
		line-height: 48px;
		border-radius: 24px;
		border:1px solid #25C4FD;
		color: #70e4ff;
    	background: #fff;
		font-size:16px;
		cursor: pointer;
	}
	.dialog-btn0{
		border-color: #70e4ff;
	    color: #70e4ff;
	    background: #fff;
	}
	.dialog-btn1{
		border-color: transparent;
	    color: #fff;
	    background-image: -webkit-linear-gradient(left bottom, #00abf7, #00d0fb);
	}
	.dialog-btn0:hover{
		background: rgba(120, 230, 255, 0.1);
	}
	.dialog-btn1:hover{
		background-image: -webkit-linear-gradient(left bottom, #15baff, #3fd9ff);
	}

	.tips-layer{
		position: absolute;
		top:0;
		left:0;
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.1)
	}
	.tips-msg{
		padding:10px 20px;
		background: #fff;
		font-size: 14px;
		min-width: 200px;
		text-align: center;
		border-radius: 5px;
		color:#333;
	}
</style>
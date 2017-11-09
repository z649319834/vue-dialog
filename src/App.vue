<template>
  <div id="app">
    <ul class="btns">
      <li class="btn" @click="showDialogHandler">alert 消息层</li>
      <li class="btn" @click="delayHandler">Tips 消息层</li>
    </ul>

  </div>
  

</template>

<script>
  export default {
    name:"dialog",
    data:function(){
      return {

      }
    },
    mounted(){

    },
    methods:{
      showDialogHandler(){
        let that=this;
        this.$dialog({
          isclose:true,
          message:{
            text:'<div style="width:500px;padding:30px 0;"><input id="projectName" style="margin:0 auto;display:block;border:none;width:320px;height:40px;line-height: 40px;font-size:16px;border-bottom: 1px solid #70e4ff;color:#333;font-family: Microsoft YaHei;outline:none;" type = "text" value="填写新项目名称" maxlength="20" ></div>',
            style:{
              color:"green",
              fontSize:"20px"
            }
          },
          buttons:[
            {
              text:"取消",
              cssClass:"color1",
              callBack:function(){
                console.log("取消");
                that.$dialog.hide();
              }
            },
            {
              text:"确定",
              cssClass:"color2",
              callBack:function(){
                console.log("确定");
                that.$dialog({
                  type:true,
                  message:{
                    text:"OK"
                  },
                  buttons:[
                    {
                      text:"确定",
                      callBack:function(){
                        that.$dialog.hide();
                      }
                    }
                  ]
                })
                

              }
            }
          ],
          initFn(cb){
            let proName = document.getElementById("projectName");
            proName.addEventListener("keyup",function(e){
              if(e.keyCode===13){
                if(proName.value != ''){
                  let newName=proName.value;
                  console.log("初始化完成！",newName)
                  cb && typeof cb =="function" && cb();
                }
              }                  
            },false);

            proName.addEventListener("focus",function focusHandler(e){
              this.select();
            },false);
            
          }
        })
      },
      delayHandler(){
        this.$dialog({
          type:true,
          message:{
            text:"参数测试222",
            style:{
              color:"pink"
            }
          },
          delay:5000,
          delayFn:function(){
            console.log("Tips 回调函数")
          },
          btnBody:{
            style:{border:"1px solid red"}
          },
          buttons:[
            {
              text:"No",
              cssClass:"color2",
              callBack:function(){
                console.log("No")
              }
            },
            {
              text:"OK",
              cssClass:"color1",
              callBack:function(){
                console.log("OK")
              }
            }
          ]
        });
      }
    }
    
  }
</script>

<style scoped>
  .btns{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 500px;
    height:50px;
    overflow: hidden;
  }
  .btn{
    margin:20px 40px;
    width:140px;
    height:48px;
    text-align: center;
    line-height: 48px;
    border-radius: 24px;
    border:1px solid #25C4FD;
    background: #5EC0FE;
    color:#fff;
    font-size:16px;
    cursor: pointer;
  }
  .corlor1{
    color:red;
  }
  .corlor2{
    color:green;
  }
</style>
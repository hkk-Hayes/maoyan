<template>
 <div class="logcon">
  <div class="pageTitle" >
  <div><span class="iconfont icon-shipin9"></span></div>
  <div>猫眼电影</div>
  <div></div>
  </div>
  <div class="login_con">
    <div class="input">
      <input type="text" placeholder="输入手机号">
      <input type="text" placeholder="输入验证码">
    </div>
    <div class="btn">
      点击登录
    </div>
    <div class="check">
      <input type="checkbox" name="" id="" @click="login">
      <span>我同意安全协议</span>
    </div>
  </div>
 </div>
</template>

<script>
export default {
    name:'logIn',
    methods:{
      login(){
        localStorage.setItem("user", this.user);
      // 页面跳转
      this.$router.push("/mydetil");
      }
    }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
 .pageTitle{
        position: fixed;
        top:0;
        height: 1.5625rem;
        width: 100%;
        font-size: 18px;
        background-color: rgb(229,72,71);
        line-height: 51px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        div:nth-child(1){
          width: 30%;
          span{
           padding-left: .425rem;
           font-size: 20px;
          } 
        }
        div:nth-child(2){
          width: 40%;
          text-align: center;
        }
        div:nth-child(3){
          width: 30%;        
          text-align: right;
         
        }
      
 }
 .login_con{
  width: 100%;
  margin-top:2.5625rem ;
  
  input{
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border: none;
    padding-left: 15px;
    font-size: 18px;
    border-bottom: 1px #cdcaca solid;
  }
  .btn{
    width: 80%;
    height: 1rem;
    border-radius: 1rem;
    margin: 10px auto 0;
    text-align: center;
    line-height:1rem ;
    font-size: 18px;
    background-color: #aea5a5;
  }
  .check{
    padding: 20px;
    text-align: center;
    input{
      width: 15px;
      height:15px;
    }
  }
 }
</style>
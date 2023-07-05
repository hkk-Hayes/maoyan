<template>
 <div class="pageTitle" v-if="routeArr.indexOf(nowRoute) != -1">
  <div></div>
  <div>猫眼电影</div>
  <div><span class="iconfont icon-hanbaobao"></span></div>
  </div>
</template>

<script>
  import "../font/iconfont.css"
export default {
    name:'myHead',
    data(){
        return{
          routeArr: [
        "reying",
        "daiying",
        "yingyuan",
        "jingdian",
        "video",
        "shortvideo",
        "show",
        "me",
        "rev",
        "duv",
        "yuv",
        "suv"
      ],
      nowRoute: "", //当前页的路由
        }
      },
      watch: {
          $route() {
          // console.log(this.$route);
          this.nowRoute = this.$route.name;
          },
  },
}
</script>

<style lang="less" scoped>
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
        }
        div:nth-child(2){
          width: 40%;
          text-align: center;
        }
        div:nth-child(3){
          width: 30%;        
          text-align: right;
          span{
           padding-right: .425rem;
          } 
        }
      
 }
</style>
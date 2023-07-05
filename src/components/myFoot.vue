<template>
    <div>
        <nav v-if="routeArr.indexOf(nowRoute) != -1">
      <router-link to="/home"><span class="iconfont icon-shipin15 font_b"></span><br><span>电影</span></router-link> 
      <router-link to="/video"><span class="iconfont icon-shipinbofang1 font_b"></span><br><span>视频</span></router-link> 
      <router-link to="/shortvideo"><span class="iconfont icon-shipin5 font_b"></span><br><span>短视频</span></router-link> 
      <router-link to="/show"><span class="iconfont icon-dianyingpiao font_b"></span><br><span>演出</span></router-link> 
      <router-link to="/mydetil"><span class="iconfont icon-wode font_b"></span><br><span>我的</span></router-link>
    </nav>
    </div>
  </template>
  
  <script>
  import "../font/iconfont.css"
  export default {
      name:'myFoot',
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
        "suv",
        'mydetil',
        
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
  nav{
    width: 100%;
    height: 1.5625rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    text-align: center;
    border-top: 0.02rem solid #625e5e;
    background-color: #fff;
    font-size: .3rem;
    .font_b{
      font-size:.65rem;
    }
    a{
        margin-top: 0.325rem;
        display: inline-block;
        &.router-link-active {
      color: rgb(229,72,71);
    }
    }
  }
  </style>
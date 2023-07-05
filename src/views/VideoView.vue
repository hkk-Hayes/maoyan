<template>
  <div>
    <div class="tabbar">
      <ul>
        <li><router-link to="/video/rev">推荐</router-link></li>
        <li><router-link to="/video/duv">热片解读</router-link></li>
        <li><router-link to="/video/yuv">新片预告</router-link></li>
        <li><router-link to="/video/suv">速看电影</router-link></li>
      </ul>
    </div>
    <div class="vcon">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'VideoView'
}
</script>

<style scoped lang="less">
.vcon{
  // margin-top:1.4rem;
}
    .tabbar{
      ul{
        display: flex;
        widows: 100%;
        height: 1.4rem;
        background-color: #fff;
        li{
          list-style: none;
          display: inline-block;
          width: 1.75rem;
          height: 100%;
          text-align: center;
          line-height:  1.4rem;
          margin-right: 0.45rem;
          font-size: 0.38rem;
          a{
        
         display: inline-block;
         &.router-link-active {
            color: rgb(229,72,71);
            font-size:  0.42rem;
            
            }
    }
        }
      }
    }
</style>
<template>
  <div>
    刷新中
    <!-- nav -->
    <div class="nav">
            <div class="n-1" @click="gotocity">
                <span>{{ cityname }}</span>
                <span class="iconfont icon-xiala"></span>
            </div>
            <div class="n-2">
                <router-link
                    v-for="item in childNav"
                    :key="item.id"
                    :to="item.path"
                     @click.native="changeLine(item.left)">
                     {{ item.name }}
                 </router-link>
                <!-- <router-link to="/home/reying">电影</router-link>
                <router-link to="/home/yingyuan">影院</router-link>
                <router-link to="/home/daiying">待映</router-link>
                <router-link to="/home/jingdian">经典电影</router-link> -->
                <div class="line" :style="{ left: lineleft }"></div>
            </div>
            <div class="n-3">
                <span class="iconfont icon-sousuoxiao"></span>
            </div>        
  </div>
  <div class="sub-con">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
//https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=北京&ci=1&channelId=4
export default {
    name:'MovieView.vue',
    data() {
    return {
      childNav: [
        { id: 1, path: "/home/reying", name: "热映", left: ".48rem" },
        { id: 2, path: "/home/yingyuan", name: "影院", left: "1.8667rem" },
        { id: 3, path: "/home/daiying", name: "待映", left: "3.28rem" },
        { id: 4, path: "/home/jingdian", name: "经典电影", left: "5.0667rem" },
      ],
      lineleft: ".48rem",
      cityname:''
    };
  },
  computed:{
    ...mapState(["cityObj"]),
  },
  mounted(){
    this.cityname=this.cityObj.name
  },
    methods:{
        gotocity(){
            this.$router.push('/cityList')
        },
        changeLine(left){
            this.lineleft=left
        }
    }
   
}

</script>

<style lang="less" scoped>
.sub-con{margin-top:0.7118rem;}
.nav {
    width: 100%;
    height: 1.2267rem;
    border-bottom: .0267rem solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 1.3333rem;
    background: #fff;
    font-size: .4rem;
    z-index: 10;
    a {
  cursor: pointer;
    text-decoration: none;
    color: #333;
    &.router-link-active {
    font-size: .36rem;
    color: #9d1b1b;
    // border-bottom: 3px solid #f03d37;
  }
}
}

 .nav .n-1 {
    width: 1.6533rem;
}

.nav .n-2 {
    width: 6.4rem;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    position: relative;
    .line {
  width: 20px;
  height: 3px;
  background: #f03d37;
  position: absolute;
  bottom: -7px;
  left: 0.48rem;
  transition: 0.5s;
}
}

//  .nav .n-2::after {
//     content: "";
//     display: block;
//     position: absolute;
//     bottom: -0.2933rem;
//     left: .48rem;
//     width: .5333rem;
//     height: .08rem;
//     background: #f03d37;
// }

 .nav .n-3 {
    width: 1.6533rem;
}

 .nav .n-3 span {
    color: #f03d37;
    font-size: .5333rem;
    font-weight: bold;
}

.nav .n-2 .nav-ac {
    font-size: .4533rem;
    color: #333;
}

</style>
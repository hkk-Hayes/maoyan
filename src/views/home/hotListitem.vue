<template>
  <div>
    <div class="back" @click="goback"><span>点击返回</span><span class="iconfont icon-xiangyou1"></span></div>
    <div class="item" ref="itemcolor">
      <div class="img_con">
        <div class="leftinf0">
          <img :src="msg.img" alt="">
        </div>
        <div class="rightinf0">
        <div class="r_tit">{{ msg.nm }}</div>
        <div class="r_typt">{{ msg.cat }}</div>
        <div class="r_actor">{{ msg.star }}</div>
        <div class="r_time">{{ msg.pubDesc }}</div>
        </div>
      </div>
      <div class="text">
        {{ msg.dra }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name:'hotListitem',
    data(){
      return{
        msg:{}
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    },
   async mounted(){
     await this.$axios.get("json/" + this.$route.params.id + ".json").then(
        res=>{
          // console.log(res.data.data.movie);
          this.msg=res.data.data.movie
        }
      )
      this.$refs.itemcolor.style.backgroundColor = this.msg.backgroundColor
    }
    ,
    created() {
   
  },
}
</script>

<style scoped lang="less">
  .item{
    
    position: relative;
    top:-1.5475rem;
    height: 45rem;
    padding: .56rem;
  }
.img_con{
  display: flex;
  color: #fff;
  .rightinf0{
    padding:.56rem ;
    padding-top: 0;
    font-size: .33rem;
    .r_tit{
      font-size: .6rem;
      margin-bottom: .9rem;
    }
    div{
      margin-top:.2rem ;
    }
  }
}
  .leftinf0{
    img{
      width: 2.76rem;
    }
  }
  .back{
    // background-color: #722c2c;
    position: fixed;
    top:0;
    right: 0;
    padding: .625rem;
    text-align: right;
    font-size: .325rem;
    z-index: 21321;
    color:#ffff;
  }
  .text{
    color: #fff;
  }
</style>
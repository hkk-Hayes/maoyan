<template>
  <div  class="list">
    <div class="list_item" v-for="item in yinglist" :key="item.id">
        <div class="name">{{ item.nm }} <span class="money"><span>{{ item.sellPrice }}</span>元起</span></div>
        <div class="location">{{ item.addr }}</div>
        <div class="color_box"><span>退</span><span>改签</span><span>小吃</span></div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
    name:'YuabList',
    props:['yinglist']
}
</script>

<style scoped lang="less">
.box{
    height: 1.9875rem;
}

    .list_item{
        padding: 0.625rem;
        border-bottom: 1px solid #e3dfdf;
        .name{
            font-size: .5rem;
            .money {
                font-size: .32rem;
                color: #f03d37;
                span{
                    font-size: .6rem;
                }
            }
        }
    }
    .location{
        font-size: .26rem;
        margin-top: .2rem;
    }
    .color_box{
        margin-top: .3125rem;
        span:nth-child(1){
            display: inline-block;
            border: 1px solid rgb(88,157,175);
            margin: .0525rem;
            padding:.0525rem ;
        }
        span:nth-child(2){
            display: inline-block;
            border: 1px solid rgb(88,157,175);
            margin: .0525rem;
            padding:.0525rem ;
        }
        span:nth-child(3){
            display: inline-block;
            border: 1px solid rgb(255,194,102);
            margin: .0525rem;
            padding:.0525rem ;
        }
    }
</style>
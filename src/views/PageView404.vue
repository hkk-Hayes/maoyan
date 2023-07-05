<template>
  <div>
    <div class="miluimg">
        <img src="img/milu.png" alt="">
        <div class="tit">迷路了</div>
        <button @click="gotos">点击返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'PageView404',
    methods:{
        gotos(){
            this.$router.push("./")
        }
    }
}
</script>

<style scoped lang="less">
    .miluimg{
        margin: 6rem auto;
        width: 6rem;
    }
    .tit{
        text-align: center;
        margin-top: 1.5rem;
        font-size: 1rem;
    }
    
</style>
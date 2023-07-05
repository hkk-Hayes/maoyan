<template>
  <div>
    <div class="con">
        <div class="head_p">
            <div class="text_head">我的</div>
            <span class="iconfont icon-hanbaobao"></span>
            <div class="touxian">
    
            <span class="iconfont icon-yonghu2"></span>
            </div>
        </div>
    </div>
    <div class="pay-t">
        <div class="pay_tit">我的订单</div>
        <div class="pay_con">
            <div class="img_l"><span class="iconfont icon-shipin15
"></span></div>
            <div class="img_r"><span class="iconfont icon-wo"></span></div>
        </div>
    </div>
    <button @click="logout">点击退出登录</button>
  </div>
</template>

<script>
export default {
    name:"myDetil",
    methods:{
        logout(){
            localStorage.removeItem("user")
            this.$router.push("/")
        }
    }
}
</script>

<style scoped lang="less">
    .con{
        margin-top: -1.5625rem;
    }
    .head_p{
        height: 6.5rem;
        width: 100%;
        background-color: rgb(229,76,70);
        .text_head{
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: .5rem;
            padding-top: .3rem;
        }
        span{
            color: #fff;
            font-size: .5rem;
            position: fixed;
            top: 0;
            right: 0;
            padding: .8rem;
            padding-top: .3rem;
        }
        .touxian{
            width: 3rem;
            height: 3rem;
            margin: 1rem auto 0;
            border-radius: 50%;
            overflow: hidden;
            background-color: #fff;
            // background-color: #fff;
            position: relative;
            img{
                width: 200%;
            }
            span{
                    display: inline-block;
                    // width: 100%;
                    text-align: center;
                    line-height: 1.6rem;
                    font-size: 2rem;
                    color: #ac6868;
                  position: absolute;
                  top: .5rem;
                  left: -0.3rem;
                }
        }
    }
    .pay-t{
        width: 100%;
        height: 5rem;
        border: .3rem solid #d4c7c7;
        border-left: 0;
        .pay_tit{
            text-align: center;
            color: #1a1818;
            padding-top: .4rem;
            font-size: .45rem;
        }
        .pay_con{
            display: flex;
            justify-content: space-around;
            margin-top: .5rem;
            .img_l{
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                background-color: rgb(252,99,93);
                span{
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    line-height: 1.6rem;
                    font-size: .8rem;
                    color: #fff;
                }
            }
            .img_r{
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                background-color: rgb(54,216,195);
                span{
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    line-height: 1.6rem;
                    font-size: .8rem;
                    color: #fff;
                }
            }
        }
    }
</style>
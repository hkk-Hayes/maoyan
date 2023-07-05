<template>
  <div>
    <div class="videoplay">
      <div class="video_img">
        <div class="img_tit">
          ttt阿斯顿撒旦撒旦撒
        </div>
        <img src="img/现场调查.jpg" alt="">
      </div>
      <div class="video_tit">
        <div class="tit_name">

        </div>
        <div class="tit_record">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'vTui'
}
</script>

<style scoped lang="less">
  div{
    // background-color: #b2aaaa;

  }
  .videoplay{
    width: 100%;
    height: 6.7859rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .video_img{
      width: 100%;
      flex: 1;
      // background-color: #ce3333;
      position: relative;
      overflow: hidden;
      .img_tit{
        position: absolute;
        top:0;
        padding: .5rem;
        font-size: .54rem;
        color: #ffff;
        font-family: PingFangSC-Medium,serif;
      }
      img{
        width: 100%;
      }
    }
    .video_tit{
      height: 1.2rem;
      width: 100%;
      background-color: #ccd1cd;
      display: flex;
    }
  }
</style>
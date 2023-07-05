<template>
    <div>
        <div class="items" v-for="movie in msg" :key="movie.id">
                <div class="movie-list" >
                    <div class="movie-img">
                        <img :src="movie.img" alt="">
                    </div>
                    <div class="right-info" >
                        <ul class="movie-info">
                            <li class="name">{{movie.nm}}</li>
                            <li class="score" v-if="movie.globalReleased&&movie.sc!==0">观众评<span>{{movie.sc}}</span></li>
                            <li style="font-size: 14px;color: #888" v-if="movie.globalReleased&&movie.sc===0">暂无评分</li>
                            <li class="score" v-if="!movie.globalReleased"><span>{{movie.wish}}</span>想看</li>
                            <li class="actor">{{movie.star}}</li>
                            
                            <li class="showTime" >{{movie.pubDesc}}</li>
                        </ul>
                        <div class="btn">
                            <div class="buy-btn" v-if="movie.sc==0">暂无评分</div>
                            <div class="pre-btn" v-if="movie.sc>0">{{ movie.sc }}分</div>
                        </div>
                    </div>
                </div>
            
    </div>
    <div class="height"></div> 
    </div>
  </template>
  
  <script>

  export default {
      name:'JingDing',
      data(){
        return{
            msg:[]
        }
      },
      mounted(){
        this.$axios('/ajax/moreClassicList?sortId=1&showType=3&limit=10&offset=30&optimus_uuid=11F7D5F0DF6111EDB4335D86349DD2D92B6EB357753E4C06BC6D0ED5881EE4A9&optimus_risk_level=71&optimus_code=10')
        .then(
            res=>{
                // console.log(res);
               this.msg= res.data.classicMovies.list
            }
        )
    }
  }
  </script>
  
  <style scoped lang="less">
    .height{
    height:  1.5625rem;
}
   .movie{
    display: flex;
    overflow-x: scroll;
  }
  .movie div {
    margin: 10px 5px;
    width: 85px;
  }
  .movie div span{
    display: inline-block;
    width: 85px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  /* color: #f03d37; */
  }
  .movie div img{
    height: 115px;
  }
  .movie-list{
    width: 100%;
    padding:5px 0px;
}
.movie-img>img{
    height: 90px;
    width: 64px;
    float: left;
    margin-right: 8px;
    padding-top: 5px;
    padding-left: 10px;
}
.right-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ededed;
    padding:0px 0px 5px 3px
}
.right-info>ul{
    /* 运算符前后都需要保留一个空格,否则会失效 */
    width: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding:5px 0px;
    font-size: 13px;
    color: #666;
}
.right-info>ul>li{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
}

.movie-info .name{
    font-size: 16px;
    font-weight: bold;
    color: #000;
}
.movie-info .score>span{
    font-weight: bold;
    font-size: 14px;
    color:#faaf00;
}
.btn{
    margin-right: .1125rem;
}
.btn>.buy-btn{
    // background-color: rgb(60,159,230);
    border-radius: 30px;
    color:rgb(176, 174, 170);
    font-size: .3375rem;
}
.btn>.pre-btn{
    // background-color: rgb(250,175,0);
    color:rgb(250,175,0);
    font-size: .4375rem;
}
  </style>
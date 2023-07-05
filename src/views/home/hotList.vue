<template>
  <div>
    <div class="goood">
                <span>最近备受好评电影</span>
            <div class="movie">
                <div class="mas" v-for="movie in msg" :key="movie.id">
                    <div> 
                    <img :src="movie.img" alt="">
                    <span>{{movie.nm}}</span>
                 </div>
                </div>
            </div>
    </div>
   
        <div class="items" v-for="movie in msg2" :key="movie.id">
            <router-link :to="'/item/'+movie.id"  >
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
                            <li class="showinfo" v-if="movie.globalReleased">{{movie.showInfo}}</li>
                            <li class="showTime" v-if="!movie.globalReleased">{{movie.rt}}上映</li>
                        </ul>
                        <div class="btn">
                            <button class="buy-btn" v-if="movie.globalReleased">购票</button>
                            <button class="pre-btn" v-if="!movie.globalReleased">预售</button>
                        </div>
                    </div>
                </div>
            </router-link>
    </div> 
    
    <!-- <router-link to="/item/123">
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
                            <li class="showinfo" v-if="movie.globalReleased">{{movie.showInfo}}</li>
                            <li class="showTime" v-if="!movie.globalReleased">{{movie.rt}}上映</li>
                        </ul>
                        <div class="btn">
                            <button class="buy-btn" v-if="movie.globalReleased">购票</button>
                            <button class="pre-btn" v-if="!movie.globalReleased">预售</button>
                        </div>
                    </div>
                </div>
    </div> 
    </router-link> -->
    <div class="height">
    </div>
  </div>
</template>

<script>
export default {
    //展示数据页
    name:'hotList',
    props:['msg','msg2']
}
</script>

<style scoped lang="less">
.height{
    height:  1.5625rem;
}
    .goood{
        height: 205px;
        

    }
    .goood span{
        font-size: 14px;
        text-align: left;
        display: inline-block;
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

.btn>button{
    width: 50px;
    padding:5px 12px;
    margin: 10px 15px;
    border:none;
    border-radius: 30px;
    font-size: 12px;
}
.btn>.buy-btn{
    background-color: #f03d37;
    border-radius: 30px;
    color: #fff;
}
.btn>.pre-btn{
    background-color: #3c9fe6;
    color: #fff;
}
</style>
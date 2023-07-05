<template>
     <div>
    <div class="goood">
                <span>最近最受期待</span>
            <div class="movie">
                <div class="mas" v-for="movie in msg" :key="movie.id">
                    <div> 
                    <img :src="movie.img" alt="">
                    <span>{{movie.nm}}</span>
                 </div>
                </div>
            </div>
    </div>  
    <div class="items" v-for="(item,index) in msgdata" :key="index">
                <h3>{{ index }} </h3>
                <div class="movie-list" v-for="(i,ind) in item" :key="index+'-'+ind">
                    <div class="movie-img">
                        <img :src="i.img" alt="">
                    </div>
                    <div class="right-info" >
                        <ul class="movie-info">
                            <li class="name">{{i.nm}}</li>
                            <li class="score" v-if="i.globalReleased&&i.sc!==0">观众评<span>{{i.sc}}</span></li>
                            <li style="font-size: 14px;color: #888" v-if="i.globalReleased&&i.sc===0">暂无评分</li>
                            <li class="score" v-if="!i.globalReleased"><span>{{i.wish}}</span>想看</li>
                            <li class="actor">{{i.star}}</li>
                            <li class="showinfo" v-if="i.globalReleased">{{i.showInfo}}</li>
                            <li class="showTime" v-if="!i.globalReleased">{{i.rt}}上映</li>
                        </ul>
                        <div class="btn">
                            <button class="buy-btn" v-if="i.showStateButton">预售</button>
                            <button class="pre-btn" v-if="!i.showStateButton">想看</button>
                        </div>
                    </div>
                </div>
    </div> 
    <div class="height">
    </div>
  </div>
  </template>
  
  <script>
  export default {
      name:'DaiYing',
      data(){
        return{
            msg:[],
            msgdata:{}
        }
      },
    async mounted(){
        // this.$axios.get('/ajax/moreComingList?ci=1&limit=10&movieIds=1367325,1439096,1354970,1487666,1493738,1494677,1298429,1466121,1455642,1225762&token=&optimus_uuid=11F7D5F0DF6111EDB4335D86349DD2D92B6EB357753E4C06BC6D0ED5881EE4A9&optimus_risk_level=71&optimus_code=10')
        // .then(
        //     res=>{
        //         console.log(res)
        //         this.msg=res.data.coming
        //     }
        // )
    var res=  await this.$axios.get('json/daiying.json')
    var daiying={}  
    var msg=res.data.coming
    this.msg=msg      
    msg.forEach( item=> {
        if(daiying[item.comingTitles]){
            daiying[item.comingTitle].push(item)
        }else{
            daiying[item.comingTitle]=[]
            daiying[item.comingTitle].push(item)
        }
      });      
    this.msgdata=daiying
    }
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
    background-color: rgb(60,159,230);
    border-radius: 30px;
    color: #fff;
}
.btn>.pre-btn{
    background-color: rgb(250,175,0);
    color: #fff;
}
  </style>
<template>
  <div>
    <div class="city_cn">
      <div class="one">定位城市</div>
    <!-- 定位失败，请稍后重试 -->
    <div class="two">
        <div class="susess">
            定位失败，请稍后重试
        </div>
    </div>
    <!-- 最近访问城市 -->
    <h4>最近访问城市</h4>
    <div class="three">
      <!-- <div>北京</div> -->
      <div v-for="(item,index) in oldcitylist" :key="index">{{ item }}</div>
    </div>
    <!-- 热门城市 -->
    <div class="four">
        <div class="four-1">热门城市</div>
        <div class="four-2">
            <div>上海</div>
            <div>北京</div>
            <div>广州</div>
            <div>深圳</div>
            <div>武汉</div>
            <div>天津</div>
            <div>西安</div>
            <div>南京</div>
            <div>杭州</div>
            <div>成都</div>
            <div>重庆</div>

        </div>
    </div>
      <van-index-bar :index-list="indexList">
      <template v-for="(item, index) in cityList">
        <van-index-anchor :index="item.initial" :key="index" />
        <van-cell
          :title="i.name"
          v-for="(i, ind) in item.list"
          :key="index + '-' + ind"
          @click="oldcity(i.name,i.code)"
        />
      </template>
    </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
    name:'cityList',
    data(){
      return{
        cityList:[],
        oldcitylist:[],
        indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
      }
    },
    mounted(){
      this.$axios.get("json/city.json").then((res) => {
      // console.log(res);
      this.cityList = res.data.city;
    });
    this.oldcitylist = JSON.parse(localStorage.getItem('search')) || [];
    // console.log(this.oldcitylist);
    },
    methods:{
      oldcity(name,code){
       this.oldcitylist.unshift(name)
        console.log(name);
        let arr= this.oldcitylist
            // 3.将数据先序列化，保存到 storage
        // var item = { name: name, code: code }   
          const uniqueArr = [];
          for (let i = 0; i < arr.length; i++) {
          if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
            }
          }
          this.oldcitylist=uniqueArr
              // console.log(this.oldcitylist);
            localStorage.setItem('search', JSON.stringify(uniqueArr));
            // 4.将数据显示到 页面上
            this.$store.commit("changeCity", { id: code, name: name })
            this.$router.push("/");
      }
    }
}
</script>

<style scoped lang="less">
  .city_cn{
    margin-top: -1.5rem;
  }
  .one {
    height: .8rem;
    background-color: #ebebeb;
    font-size: 14px;
    line-height: .8rem;
    padding-left: .533333rem;
}

.two {
    height: 1.093333rem;
    background-color: #f5f5f5;
    font-size: 14px;
    padding-top: .4rem;
}

.two>div {
    width: 3.733333rem;
    height: .826667rem;
    padding: .026667rem .533333rem;
    border: .026667rem solid #e6e6e6;
    margin-left: .373333rem;
    background-color: #ffffff;
    line-height: .826667rem;
    overflow: hidden;
}

.three {

    min-height: .4rem;
    background-color: #ebebeb;
    font-size: 14px;
    line-height: .8rem;
    padding-left: .4rem;
    padding-left: .533333rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

.three>div {
    font-size: 14px;
    height: .826667rem;
    width: 2.186667rem;
    padding: 0 .106667rem;
    border: .026667rem solid #ebebeb;
    border-radius: 5px;
    background-color: #ffffff;
    text-align: center;
    line-height: .826667rem;
    margin: 10px;


}

.four>.four-1 {
    margin-top: .213333rem;
    background-color: #ebebeb;
    height: .8rem;
    font-size: 14px;
    line-height: .8rem;
    padding-left: .533333rem;
}

.four>.four-2 {
    height: 5.12rem;
    width: 9.2rem;
    padding-bottom: .213333rem;
    padding-right: .8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}

.four>.four-2>div {
    font-size: 14px;
    height: .826667rem;
    width: 2.186667rem;
    padding: 0 .106667rem;
    border: .026667rem solid #ebebeb;
    border-radius: 5px;
    background-color: #ffffff;
    text-align: center;
    line-height: .826667rem;
}


.four>.four-2>div:nth-of-type(12) {
    border: none;
    background-color: #f5f5f5;
}

</style>
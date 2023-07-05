<template>
    <div>
        <div class="cinma_change">
            <ul>
                <li>全城 <span class="iconfont icon-xiala"></span></li>
                <li>品牌<span class="iconfont icon-xiala"></span></li>
                <li>特色<span class="iconfont icon-xiala"></span></li>
            </ul>
        </div>
        <div class="cinma_list">
            <YingyuanList :yinglist="yingdata"></YingyuanList>
        </div>
    </div>
  </template>
  
  <script>
  import YingyuanList from "./YingyuanList.vue";
  import  {mapState} from "vuex"
  export default {
      name:'YingYuan',
      data(){
        return{
            yingdata:[]
        }
      },
      components:{
        YingyuanList
      },
      computed:{
        ...mapState(["cityObj"])
      },
      mounted(){
        this.$axios.get(`/ajax/moreCinemas?movieId=0&day=2023-04-20&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1681989935211&cityId=${this.cityObj.id}&optimus_uuid=11F7D5F0DF6111EDB4335D86349DD2D92B6EB357753E4C06BC6D0ED5881EE4A9&optimus_risk_level=71&optimus_code=10`)
        .then(
            res=>{
                // console.log(res.data.cinemas.cinemas);
                this.yingdata=res.data.cinemas.cinemas
            }
        )
      }
  }
  </script>
  
  <style scoped lang="less">
    .cinma_change ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
      list-style: none;
      height: .825rem;
      top :2.58rem;
      position: fixed;
      background-color: #fff;
        li{
            flex: 1;
            text-align: center;
            font-size: 0.3375rem;
        }
    }
    .cinma_list{
      margin-top: 1rem;
    }

  </style>
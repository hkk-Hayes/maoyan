<template>
    <div>
        <hotList :msg="msg" :msg2="msg2"></hotList>
    </div>
    
  </template>
  
  <script>
  import hotList from './hotList.vue'
  import { mapState } from "vuex";
  export default {
      name:'reYing' ,
      data(){
        return{
            msg:[],
            msg2:[],
        }
      },
      components:{
      hotList
    },
    computed:{
        ...mapState(["cityObj"]),
    },
    mounted(){
        // this.$axios.get(`/api/mmdb/movie/v3/list/hot.json?ct=${this.cityObj.name}&ci=${this.cityObj.id}&channelId=4`).then(
        //     res=>{
        //         // console.log(res.data.data.hot);
        //         this.msg=res.data.data.hot
        //     }
        // ),
        console.log(this.cityObj);
        this.$axios.get('json/movieOnInfoList.json').then(
            res=>{
                // console.log(res.data.data.hot);
                this.msg2=res.data.movieList
            }
        )
    
     }
    }
  </script>
  
  <style scoped lang="less">

  </style>
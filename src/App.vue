<template>
  <div id="app">
    <myHead></myHead>
    <div class="con">
      <router-view  @clearHeaderFooter="clearHeaderFooter = true"/>
    </div>
    <myFoot></myFoot>
  </div>
</template>

<script>
import myHead from './components/myHead.vue'
import myFoot from './components/myFoot.vue'; 
export default {
    name:'App',
    components:{
      myHead,
      myFoot
    },
  data() {
    return {
      
    }
  }
}

</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html, body {
  overscroll-behavior: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #333;
  position: relative;
  width: 100%;
  list-style: none;
  // font-size: 34px;
}

a {
  cursor: pointer;
    text-decoration: none;
    color: #333;
    &.router-link-active {
    font-size: .36rem;
    color: #333;
    // border-bottom: 3px solid #f03d37;
  }
}

.con{
  margin-top: 1.5625rem;
}

</style>

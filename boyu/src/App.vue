<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
a{
  text-decoration: none;
  color: black;
}
</style>
<script>
import Tabbar from './components/Tabbar.vue'
export default {
  components:{
    Tabbar
  }
}
</script>

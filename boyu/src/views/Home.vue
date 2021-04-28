<template>
  <div>
    <swipe></swipe>
    <!-- <refresh>
      
    </refresh> -->
    <navbar></navbar>
    <navbar></navbar>
    <pull></pull>
    <!-- <tabbar></tabbar> -->

  </div>
</template>

<script>
import Swipe from "../components/Swipe.vue";
// import Tabbar from "../components/Tabbar.vue";
import Refresh from "../components/pullRefresh.vue";
import Navbar from '../pages/homepage/Nav.vue'
import Pull from '../pages/homepage/PullRefresh.vue'
export default {
  components: { Swipe,Refresh,Navbar,Pull},
};
</script>

<template>
  
  <div>
    <h3>热门入住地</h3>
    <van-tabs v-model="activeName" :ellipsis="false">
  <van-tab title="杭州西湖" name="a" class="nav_item">
    <div class="flex_box">
      <router-link to="/details">
        <hot v-for="(item,i) in count" :key="i" ></hot>
      </router-link>
    </div>
    <arrow></arrow>
  </van-tab>
  <van-tab title="西溪国家湿地公园" name="b" class="nav_item">
    <hot v-for="(item,i) in count" :key="i"></hot>
    <arrow></arrow>
  </van-tab>
  <van-tab title="杭州宋城" name="c" class="nav_item">
    <hot v-for="(item,i) in count" :key="i"></hot>
    <arrow></arrow>
  </van-tab>
  <van-tab title="灵隐寺" name="d" class="nav_item">
    <hot v-for="(item,i) in count" :key="i"></hot>
    <arrow></arrow>
  </van-tab>
  <van-tab title="钱江新城" name="e" class="nav_item">
    <hot v-for="(item,i) in count" :key="i"></hot>
    <arrow></arrow>
  </van-tab>
  
</van-tabs>
  </div>
</template>
<style>
  .flex_box{
    display: flex;
    flex-wrap: wrap;
  }
</style>

<script>
import Hot from './Hot'
import Arrow from './Arrow';
export default {
    components:{Hot,Arrow},
  data() {
    return {
      activeName: 'a',
      count:2
    };
  },
};

</script>
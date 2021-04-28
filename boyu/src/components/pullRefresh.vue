<template>
  <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh" style="min-height: 100vh;">
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->

  <!-- 加载提示 -->
  <template #loading>
    
  </template>
  <p> {{ count }}</p>
</van-pull-refresh>


</template>
<style>
    

    	
</style>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      Toast:""
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>
<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item>
        <van-image 
          :src="require('../assets/silder/_20210422195001.jpg')"
        />
        
      </van-swipe-item>
      <van-swipe-item>
          <van-image
          :src="require('../assets/silder/_20210422195001.jpg')"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  
  text-align: center;
  
}
</style>
<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="收藏房源">
               <!-- 收藏页内容 -->
               <likecontext></likecontext>
            </van-tab>
            <van-tab title="收藏笔记" class="text">暂无笔记</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Likecontext from '../components/Likecontext'
export default {
  components:{Likecontext},
    data() {
    return {
      active: 1,
    };
  }
}
</script>
<style>
.van-tabs__line{
  width: 60px !important;
}
.text{
  padding: 20px 0 0 50px;
  color: #646566;
}
</style>
<template>
<!-- tabbar标签菜单 vant组件 -->
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="like-o" to="/Like">收藏</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/me">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
    return {
      active: 0,
    };
  }
}
</script>
<template>
    <div>
        <div class="title">
            <div class="shetitle"><b>预定须知</b><span>(规则由房东制定)</span></div>
            <div class="shititle">
                <van-cell is-link title="全部规则" @click="show = true" />
                <van-action-sheet v-model="show" title="预定须知">
                    <div class="content">
                       <van-tabs v-model="active">
                            <van-tab title="费用/要求">
                                <img src="../assets/yuding03.jpg" alt="">
                            </van-tab>
                            <van-tab title="退订规则">
                                <img src="../assets/yuding02.jpg" alt="">
                                <img src="../assets/yuding01.jpg" alt="">
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-action-sheet>
            </div>
        </div>
        <div>
            <ul class="ruzhu">
                <li><b>入住/退订</b><span>入住日14:00后入住，离店日12:00前离开</span></li>
                <li><b>在线押金</b><span>不收取押金</span></li>
                <li><b>清洁费用</b><span>不收取清洁费用</span></li>
                <li><b>加客费用</b><span>0/人</span></li>
                <li><b>房东要求</b><span>允许做饭，不允许带宠物，不允许吸烟</span></li>
                <li><b>取消规则</b><span class="red">预定成功后30分钟内取消订单，不收取费用，30分钟后取消将扣除100%房费。</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      show: false,
      active:1
    };
  }
}
</script>
<style scoped>
.title{
    display: flex;
    position: relative;
}
.shetitle{
    font-size: 20px;    
    margin: 10px 0 10px 15px;
}
.shetitle span{
    font-size: 14px;
}
.shititle{
    position: absolute;
    right: 6px;
}
 .content {
    padding: 16px 16px 60px;
  }
.content img{
    width:100%;
}
.ruzhu{
    margin:10px 10px 60px;
    border:1px solid #e5e1e1;
    border-radius: 5px;
}
.ruzhu li span{
    padding: 15px;
}
.ruzhu li{
    padding: 10px;
}
.ruzhu b{
    font:14px 黑体;
    font-weight: 600;
}
.ruzhu .red{
    color:red;
    white-space: wrap;
    line-height: 25px;
}
</style>
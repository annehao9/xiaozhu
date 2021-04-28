<template>
  <div>
    <van-nav-bar
      title="评论区"
      left-text="返回"
      left-arrow
      @click-left="rateClick"
    />
    <div class="rate_bg">
      <div class="rate_size">
        <b>5.0</b>
        <van-icon  v-for="i in count" :key="i" name="star" class="rate_star" style="font-size:15px;"/>        
      </div>
      <div style="font-size:15px;" class="rate_size_s">(共5条)</div>
      <div class="rate_size_ss">
        <span v-for="(item,i) in pcount" :key="i">{{item}}</span>
      </div>     
    </div>
    <van-tabs @click="rateClick1" >
      <van-tab title="全部">
        <div class="rate_pl">
          <div class="rate_pl_head"></div>
          <b class="rate_pl_name">星回十三ib</b>
          <span class="rate_pl_time">2021年01月 预定1晚</span>
          <div class="rate_pl_content">房间很干净,地理位置很好</div>
        </div>
      </van-tab>
      <van-tab title="有图">
        <div class="rate_pl">
          <div class="rate_pl_head"></div>
          <b class="rate_pl_name">我是吃不胖是我</b>
          <span class="rate_pl_time">2021年01月 预定2晚</span>
          <div class="rate_pl_content">很不错,卫生很干净</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      count:5,
      pcount:["整洁卫生5.0","描述相符5.0","交通位置4.9","安全程度5.0","性价比5.0"]
    }
  },
  methods: {
    rateClick() {
      window.history.back()
    },
    rateClick1(){
      
    }
  },
  
}
</script>
<style>
  .rate_bg{
    position: relative;
    width: 90%;
    height: 160px;
    background: rgb(237,244,254);
    border-radius: 5%;
    top: 20px;
    margin: 0 auto;
  }
  .rate_size{
    position:absolute;
    font-size: 40px;
    color:darkcyan;
    left: 20px;
    top: 20px;
  }
  .rate_size_s{
    position: absolute;
    left: 159px;
    top: 38px;
  }
  .rate_size_ss{
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    width: 90%;
    line-height: 30px;
    left: 20px;
    top: 80px;
  }
  .rate_size_ss>span{
    margin-right: 20px;
  }
  .rate_pl{
    position: relative;
    width: 90%;
    border-bottom: 1px solid #e8e8e8;
    margin: 15px auto;
  }
  .rate_pl_head{
    width: 50px;height: 50px;
    border-radius: 50%;
    background: #e8e8e8;
  }
  .rate_pl_name{
    position: absolute;
    font-size: 14px;
    top: 5px;
    left: 65px;
  }
  .rate_pl_time{
    position: absolute;
    font-size: 7px;
    color: #999;
    top: 25px;
    left: 65px;
  }
  .rate_pl_content{
    width: 80%;
    text-align: left;
    margin: 20px 0;
  }
</style>
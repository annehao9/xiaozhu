<template>
  <div class="container">
    <van-row type="flex" justify="space-around" class="margin_b10">
      <van-col span="10">
        <img
          class="hot_img"
          src="../../assets/homepage/_20210421202211.png"
          alt=""
        />
        <div>
          <div class="mt_5">
            <span style="margin-right: 5px;"><b>$527</b></span>
            <span style="font-size: 12px">宜住5人</span>
            <span style="float: right; padding-top: 2px;font-size:12px">
              <van-icon name="star" size="12px" color="rgb(24,184,193)"/>&nbsp;<b style="text-align:center">5.0</b>
            </span>
          </div>
          <div>
            <p class="hot_hide">123213213213213213213213213213</p>
          </div>
        </div>
      </van-col>


      <van-col span="10" class="margin_b10">
        <img
          class="hot_img"
          src="../../assets/homepage/_20210421202211.png"
          alt=""
        />
        <div>
          <div class="mt_5">
            <span style="margin-right: 5px;"><b>$527</b></span>
            <span style="font-size: 12px">宜住5人</span>
            <span style="float: right; padding-top: 2px;font-size:12px">
              <van-icon name="star" size="12px" color="rgb(24,184,193)"/>&nbsp;<b style="text-align:center">5.0</b>
            </span>
          </div>
          <div>
            <p class="hot_hide">123213213213213213213213213213</p>
          </div>
        </div>
      </van-col>
      
    </van-row>
    
  </div>
</template>
<style scoped>

.margin_b10{
  margin-bottom: 10px;
}
.hot_img {
  width: 160px;
  height: 100px;
  border-radius: 10px;
}
.mt_5{
  margin-top: 5px;
}
.hot_hide {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}


</style>
<script>

export default {
  
}
</script>
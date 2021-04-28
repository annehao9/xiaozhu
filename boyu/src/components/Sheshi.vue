<template>
    <div>
        <div class="title">
            <div class="shetitle"><b>配套设施</b></div>
            <div class="shititle">
                <van-cell is-link title="全部设施" @click="show = true" />
                <van-action-sheet v-model="show" title="配套设施">
                    <div class="content">
                        <img src="../assets/sheshi.jpg" alt="">
                    </div>
                </van-action-sheet>
            </div>
        </div>
        <div>
            <ul class="sheshi">
                <li>
                    <b>基础</b>
                    <span><van-icon name="checked" />WIFI</span>
                    <span class="close"><van-icon name="close" />电梯</span>
                    <span class="close"><van-icon name="close" />停车位</span>
                </li>
                <li>
                    <b>洗浴</b>
                    <span><van-icon name="checked" />独立卫生间</span>                 
                    <span class="close"><van-icon name="close" />共用卫生间</span>
                    <span><van-icon name="checked" />热水淋浴</span>
                </li>
                <li>
                    <b>电器</b>
                    <span><van-icon name="checked" />空调</span>
                    <span><van-icon name="checked" />电视</span>
                    <span><van-icon name="checked" />洗衣机</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      show: false,
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
.shititle{
    position: absolute;
    right: 6px;
}
 .content {
    padding: 16px 16px 60px;
  }
.content img{
    width: 100%;
}
.sheshi{
    margin:10px;
    border:1px solid #e5e1e1;
    border-radius: 5px;
}
.sheshi li span{
    padding: 15px;
}
.sheshi li{
    padding: 10px;
}
.sheshi b{
    font:14px 黑体;
    font-weight: 600;
}
.van-icon-checked::before{
    color: darkcyan;
    padding-right:5px
}
.sheshi .close{
    color: #666;
}
</style>
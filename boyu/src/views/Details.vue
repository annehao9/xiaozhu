<template>
    <div class="details">
        <swipe></swipe>   
        <div class="contentone">
            <div class="titledetails">
                <p class="title" style="font-size:20px;margin:10px 0 5px 10px"><b>地暖海景大投影</b></p>
                <div class="subtitle"><span>速订</span><span>可做饭</span><span>可聚会</span><span>有停车位</span></div>
            </div>
            <router-link to="/rate">
            <ul class="rate"> 
                <li>5.0</li>
                <li>
                    <van-icon name="star" v-for="i of count" :key="i"/>
                </li>
                <li>---</li>
                <li>8条点评</li>
            </ul>
            </router-link>
        </div> 
        <div class="contenttwo">
            <div>
                <img src="../assets/house.jpg" alt="">
                <div class="hdetails">
                    <p>整套出租48平</p>
                    <p>1室1卫1厨</p>
                </div>
            </div>
            <div>
                <img src="../assets/bed.jpg" alt="">
                <div class="bdetails">
                    <p>1张床*宜住</p>
                    <p>加客0元/人</p>
                </div>
            </div>
        </div>
        <!-- <div class="contentthree">地图组件</div> -->
         <!-- 上部分 -->
        <div class="ldl_top">
            <!-- 头部 -->
            <div class="ldl_header">
                 <div><img src="../assets/avatar.jpg" alt=""></div>
                 <span class="ldl_name">姓名</span>
                 <van-tag plain class="ldl_tag" type="primary">实名认证</van-tag>
            </div>
            <!-- 个人介绍 -->
            <div class="ldl_idus">
                <span>个人介绍：</span>
                <span>人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好人好好人好好人好好人好好人好好人好好好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好</span>
            </div>
                <p><router-link to="/landlady">查看更多 </router-link></p>           
        </div>
        <calendar></calendar>
        <sheshi></sheshi>
        <ruzhu></ruzhu>
        <goodsorder></goodsorder>
    </div>    
</template>
<script>
import Swipe from '../components/Swipe'
import Calendar from '../components/Calendar'
import Sheshi from '../components/Sheshi'
import Ruzhu from '../components/Ruzhu'
import Goodsorder from '../components/Goodsorder'
export default {
    components:{Swipe,Calendar,Sheshi,Ruzhu,Goodsorder},
    data(){
        return{
            count:5
        }
    }
}
</script>
<style scoped>
.subtitle span{
    padding: 0 3px ;
    color: #666;
    border: 1px solid #666;
    margin: 0 4px;
}
.contentone{
    position: relative;
}
.subtitle{
    margin-left:10px
}
.rate{
    background-color:rgb(217, 240, 236);
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top:-60%;
    right:10px;
}
.rate li:nth-child(1){
    color: darkcyan;
    font-size: 18px;
    padding-top:5px ;
}
.rate :nth-child(2){
    color: darkcyan;
    font-size: 12px;
}
.rate li:last-child{
    padding-bottom: 10px;
}
.contenttwo{
    margin: 30px 10px 0 20px;
    border-radius: 5px;
    background: #fcfafd;
    height: 60px;
    display: flex;
}
.contenttwo img{
    width: 25%;
    float: left;
    margin-top: 6px;
}
.contenttwo .hdetails,.contenttwo .bdetails{
    float: left;
    margin-left:10px;
    margin-top: 10px;
}
.contentthree,.contentfour{
    height: 60px;
    border-radius: 5px;
    margin: 10px 10px 0;
}
.contentthree{
    background: #f0fbfd;
}
.contentfour{
    background:#ffeff2 ;
}
.ldl_top{
    margin:2px;
    padding:0 2px;
    background-color:honeydew;
   border-radius: 5px ;
}
.ldl_top>p{
 margin-right: 0;
 padding-top:5px;
 padding-right: 0;
 text-align: end;
 font-size: 12px;
 font-weight:bold;
}
.ldl_header{
    margin:0 5px;
    height: 60px;
    border-bottom: 1px dashed #bbbb;
    padding:0 5px;
    position: relative;
}
.ldl_header>div{
    width:50px;
    height:50px;
    border-radius:50%;
    overflow: hidden;
}
.ldl_header>div>img{
    width:100%;
    height:100%;
}
.ldl_name{
   position: absolute;
   top:10px;
   left:70px;
   font-size:14px;
   font-weight: bold;
}
.ldl_tag{
   position: absolute;
   top: 30px;
   left:70px;  
}
.ldl_idus{
    width:100%;
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.ldl_idus>span:nth-child(1){
   font-size:14px;
   font-weight: bold;
}
.ldl_idus>span:nth-child(2){
   font-size:12px;
   overflow: hidden;
}
</style>
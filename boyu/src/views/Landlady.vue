<template>
    <div id="ldl">
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
                <span>个人介绍</span>
                <span>人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好人好好人好好人好好人好好人好好人好好好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好好人好</span>
            </div>
            <p>查看更多</p>
        </div>
        <!-- 下部分 -->
        <div>
            <!-- 小标题 -->
            <div class="subtitle">
                <span>相关房源</span>
                <span>(4套)</span>
            </div>
            <!-- 组件 -->
        </div>
    </div>
</template>
<style scoped>
.ldl_top{
    margin:5px 5px;
    padding: 5px 5px;
    box-shadow:-1px 0px  3px rgb(211, 208, 208),/*左边阴影*/
                0px -2px 3px rgb(211, 208, 208),/*上边阴影*/
                3px 0px  3px rgb(211, 208, 208),/*右边阴影*/
                0px 4px  4px rgb(211, 208, 208);/*下边阴影*/
   border-radius: 10px;
}
.ldl_top>p{
 margin-right: 0;
 padding-top:5px;
 padding-right: 0;
 text-align: end;
 font-size: 16px;
 font-weight:bold;
}
.ldl_header{
    margin:10px 10px;
    height: 100px;
    border-bottom: 1px dashed #bbbb;
    padding:5px 5px;
    position: relative;
}
.ldl_header>div{
    width:80px;
    height:80px;
    border-radius:50%;
    overflow: hidden;
}
.ldl_header>div>img{
    width:100%;
    height:100%;
}
.ldl_name{
   position: absolute;
   top:20px;
   left:120px;
   font-size:20px;
   font-weight: bold;
}
.ldl_tag{
   position: absolute;
   top:50px;
   left:120px;  
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
   font-size:18px;
   font-weight: bold;
}
.ldl_idus>span:nth-child(1)::before{
    content:"|";
    margin-left: 8px;
    margin-right: 4px;
    font-size:18px;
    font-weight: bold;
}
.ldl_idus>span:nth-child(2){
   font-size:17px;
   overflow: hidden;
}
.subtitle{
    text-align: left;
    margin-left: 5px;
    margin-top:5%;
    padding-left: 0;
}
.subtitle>span:nth-child(1){
    font-size: 20px;
    color: black;
    font-weight: bold;
}
.subtitle>span:nth-child(2){
    font-size: 14px;
    color: rgb(77, 73, 73);
}
</style>
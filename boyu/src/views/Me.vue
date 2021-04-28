<template>
    <div id='me'>
         <!-- 背景 -->
        <div class='beijing'>
            <!-- 头像 -->
            <div class="me_top">
                <div class='me_avatar'>
                   <img src='../assets/0.jpg'>
                </div>
              <div class="me_name"><span>登录/注册</span></div>
            </div>
            <!-- 列表 按钮-->  
            <div class="me_btn_all">
                <div class="me_btn_1">
                   <span class="iconfont">&#xe61a;</span>
                   <span class="me_font">实名认证</span>
                   <span class="iconfont">&#xe665;</span>
               </div>
               <div class="me_btn_1">
                   <span class="iconfont">&#xe603;</span>
                   <span class="me_font">订单记录</span>
                   <span class="iconfont spanicon">&#xe665;</span>
               </div>
               <div class="me_btn_1">
                   <span class="iconfont">&#xe7e3;</span>
                   <span class="me_font"><span>代金券</span></span>
                   <span class="iconfont">&#xe665;</span>
               </div>
               <div class="me_btn_1">
                   <span class="iconfont ">&#xe654;</span>
                   <span class="me_font"><span>礼品</span></span>
                   <span class="iconfont">&#xe665;</span>
               </div>
            </div>      
        </div>
    </div>
</template>
<style scoped>
.beijing{
    /* background-image: url(../assets/beijing.jpg); */
    border-radius: 10px;
    margin-top:10px;
    margin-left:8px;
    margin-right:8px;
    overflow: hidden;
    background-color:rgba(255,192,203, 0.8);
    
}
.me_top{
    margin:2px auto;
    text-align: center;
}
.me_avatar{
   margin:80px auto;
   margin-bottom: 5%;
   
}
.me_avatar>img{
    width:20%;
    height:20%;
    border-radius: 50%;
    border:1px solid #fff;
}
.me_name{
    font-size:15px;
    color: aliceblue;
}
.me_btn_all{
    margin-top:30%; 
    margin-bottom:20% ;
    margin-left:10px ;
    margin-right:10px;
}
.me_btn_1{
    background: aliceblue;
    border-radius: 10px;
    margin: 15px 15px;
    padding:10px 5px;
    display: flex;
   
}
.me_btn_1>span{
    font-size: 20px;
    padding: 8px 8px;
    justify-content: space-between;
}
.me_btn_1>span:last-child{
    margin-left: auto;
}
</style>
<template>
    <div id="order">
        <div>
            <!-- 房间id -->
            <van-field  type="number" v-model="roomid" label="房间id" v-show="false"/>
            <!-- 用户id -->
            <van-field  type="number" v-model="uid" label="用户id" v-show="false"/>
            <!-- 状态 -->
            <van-field  type="number" v-model="orderstate" label="状态" />
            <!-- 房间价格 -->
            <van-field  type="number" v-model="price" label="房间价格" />
            <!-- 订单时间 -->
            <van-field  type="text" v-model="ordertime" label="订单时间" v-show="false"/>
            <!-- 入住时间 -->
            <van-field  type="text" v-model="intime" label="入住时间" />
            <!-- 离开时间 -->
            <van-field  type="text" v-model="outtime" label="离开时间" />
            <!-- 备注 -->
            <van-field  type="textarea" v-model="remark" label="备注" />
            <!-- 入住人姓名 -->
            <van-field  type="text" v-model="residentsname" label="姓名" />
            <!-- 入住人电话 -->
            <van-field  type="number" v-model="residentstel" label="电话" />
       </div>
       <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>
<script>
    export default({
        data(){
            return{
                 roomid:'',
                 uid:'',
                 orderstate:'',
                 price:'',
                 ordertime:'',
                 intime:'',
                 outtime:'',
                 intime:'',
                 outtime:'',
                 remark:'',
                 residentsname:'',
                 residentstel:'',
                 obj:{}          
            }
        },
        methods:{ 
            onSubmit(){
                this.obj.roomid=this.roomid
            }
       

           
        },
        watch:{
            ordertime(newval,oldval){
                this.ordertime=date= new Date(Date.parse(newval.replace(/-/g,   "/")));

            },
            intime(newval,oldval){
                this.ordertime=date= new Date(Date.parse(newval.replace(/-/g,   "/")));

            },
            outtime(newval,oldval){
                this.ordertime=date= new Date(Date.parse(newval.replace(/-/g,   "/")));

            },
           
        }
    })
</script>

<style scoped>
         
</style>



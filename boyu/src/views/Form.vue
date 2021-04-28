<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{validator,required: true, message: '用户名格式不正确' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{validator: asyncValidator,required: true, message: '密码格式错误' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="checkForm">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    //表单验证
    onSubmit(values) {
      console.log('submit', values);
    },
     validator(val) {
      return /^\w{6,9}$/.test(val)
    },
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          
          resolve(/^\w{6,12}$/.test(val));
        }, 1000);
      });
    },
    //axios请求
    checkForm(){
      if(this.asyncValidator(this.password).then((a)=>{return a})&&this.validator(this.username)){
        let url='/login'
        let param=`username=${this.username}&password=${this.password}`
        this.axios.post(url,param).then(result=>{
          if(result.data.code==200){
            Toast('登录成功');
            this.$router.push(`/`)
          }else{
            Toast(`密码或账号错误`)
          }
        })
      }
      
    },  

    //导航栏
    onClickLeft() {
      window.history.back()
    },
    onClickRight() {
      this.$router.push(`/register`)
    },
  },
}
</script>
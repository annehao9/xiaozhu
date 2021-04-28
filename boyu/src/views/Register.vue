<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登录"
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
      <van-field
        v-model="spassword"
        type="password"
        name="再次输入密码"
        label="再次输入密码"
        placeholder="请再次输入密码"
        :rules="[{validator: check,required: true, message: '密码需与前保持一致' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="checkForm">注册</van-button>
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
      spassword: '',
      spwd:''
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
    check(){
      if(this.password==this.spassword&&this.spassword!=""){
        return true
      }else{
        return false
      }
    },
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^\w{6,12}$/.test(val));
        }, 200);
      });
    },
    //axios请求
    checkForm(){
      console.log(this.username)
      console.log(this.password)
      if(this.asyncValidator(this.password).then((a)=>{return a})&&this.validator(this.username)&&this.check()){
        let url='/register'
        let param=`username=${this.username}&password=${this.password}`
        console.log(param)
        this.axios.post(url,param).then(result=>{
          console.log(result)
          if(result.data.code==200){
            Toast('注册成功');
            this.$router.push(`/form`)
          }else{
            Toast('用户已存在');
          }
        })
      }    
    },  

    //导航栏
    onClickLeft() {
      window.history.back()
    },
    onClickRight() {
      this.$router.push(`/form`)
    },
  },
}
</script>
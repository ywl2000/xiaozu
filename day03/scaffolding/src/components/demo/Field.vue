<template>
  <div>
    <mt-header title="学前端,到学端">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <mt-field 
      type="text"
      label="用户名"
      :state="usernameState"
      placeholder="请输入用户名"
      v-model="username"
      @blur.native.capture="checkUsername">
    </mt-field>    
    <mt-field 
      type="password"
      label="密码"
      :state="passwordState"
      disableClear
      placeholder="请输入密码"
      v-model="password"
      @blur.native.capture="checkPassword">
    </mt-field> 
    <mt-field 
      type="password"
      label="确认密码"
      :state="password2State"
      placeholder="请再次输入密码"
      :attr="{maxlength:'10',autocomplete:'off'}"
      v-model="password2"
      @blur.native.capture="checkConPassword">      
    </mt-field>   
    <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>      
  </div>
</template>
<script>
export default {
  data(){
    return {
      //保存用户名
      username:'',
      //保存密码
      password:'',
      //保存确认密码
      password2:'',
      //保存用户名的状态
      usernameState:'',
      //保存密码的状态
      passwordState:'',
      //保存确认密码的状态
      password2State:''
    }
  },
  methods:{
    //检测用户名
    checkUsername(){
        let username = this.username;
        //校验用户名,用户名的规则为:字母、数字及下划线的组合,长度为6~12个字符
        let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
        if(usernameRegExp.test(username)){
          this.usernameState = 'success';
          return true;
        } else{
          this.usernameState = 'error';
          this.$toast({
            message:"请输入合法用户名",
            position:"top",
            duration:2000
          });
          return false;
        }
    },
    //检测密码
    checkPassword(){
      let password = this.password;
      //校验密码,密码的规则为:字母、数字及下划线的组合,长度为8~20个字符
      let passwordRegExp = /^[0-9A-Za-z_]{8,20}$/;
      if(passwordRegExp.test(password)){
        this.passwordState = 'success';
        return true;
      } else {
        this.passwordState = 'error';
        this.$toast({
          message:"请输入合法密码",
          position:"top",
          duration:2000
        });
        return false;
      }
    },
    //检测确认密码
    checkConPassword(){
      let password2 = this.password2;
      if(password2 == this.password){
        this.password2State = 'success';
        return true;
      } else {
        this.password2State = 'error';
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:2000
        });
        return false;
      }
    },

    handle(){     
      //仍然进行用户名、密码及确认密码的校验
      if(this.checkUsername() && this.checkPassword() && this.checkConPassword()){
          //如果所有信息都为合法的信息,则进行提交;
          //this.axios.get(....).then(res=>{....})
          if(this.username == 'admin888'){
            //出现错误提示
            this.$messagebox("注册提示","对不起,用户已存在");
          } else {
            this.$router.push('');
          }
      }
     
    }
  }
}
</script>
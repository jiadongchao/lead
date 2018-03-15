<template>
  <div class="login">
    <!-- <div class="header">
        <h1>诉讼领导办公系统</h1>
    </div> -->
    <div class="formWrap">
        <h2 class="formTitle">登录</h2>
        <el-form :label-position="'right'" label-width="120px" :model="formInfo">
            <el-form-item label="账户" class="formInput" >
                <el-input v-model="formInfo.account" placeholder="admin / lead / person"></el-input>
            </el-form-item>
            <el-form-item label="密码" class="formInput" >
                <el-input v-model="formInfo.pwd" placeholder="123" type="password" ></el-input>
            </el-form-item>

            <el-button class="loginBtn" type="primary" size="medium"  @click="loginFn(formInfo)">登录</el-button>

        </el-form>
    </div>

  </div>
</template>

<script>
import {setCookie,getCookie} from '../../assets/js/cookie.js'
export default {
  name: "Login",
    data() {
      return {
        formInfo: {
          account: '',
          pwd: '',
        },
        perName:"",
        loginURL:'http://localhost:3000/'
      };
    },
    mounted(){
        // 页面挂载获取cookie，如果存在用户名，的cookie，则跳转到lead页
        if(getCookie('usertype')){
            this.$router.push('/'+getCookie('usertype'));
        }

    },
    methods:{
        loginFn :function(formInfo){
            this.$http.post(this.loginURL,this.formInfo).then(response => {
            // success callback
                console.log(response)
                if(response.data.code==1){
                    var type = response.data.type;
                    this.perName= response.data.name;
                    switch(type){
                        case 1:
                        setTimeout(function(){
                            this.$router.push('/Person');
                        }.bind(this),100)
                        setCookie('usertype','Person',1000*60);
                        break;
                        case 2:
                        setTimeout(function(){
                            this.$router.push('/Admin');
                        }.bind(this),100)
                        setCookie('usertype','Admin',1000*60);
                        break;
                        case 3:
                        setTimeout(function(){
                            this.$router.push('/lead');
                        }.bind(this),100)
                        setCookie('usertype','lead',1000*60);
                        break;
                        default:
                        console.log("error")
                    }
                    setCookie('username',this.perName,1000*60);
                    this.sendUsername();                    
                }else{
                    console.log("请输入正确的用户名密码！")
                }
                
            }, response => {
            // error callback
                console.log(response)
            })
        },
        sendUsername:function (){
            this.$emit("listenTochildEvent",this.perName);
        }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{height: 100%;position: relative;}
.header{height: 50px;background: #409EFF;}
.header h1{font-size: 30px;height: 50px;line-height: 50px;color: #ffffff}
.formWrap{background:#F2F2F2; width: 500px;height: 300px;text-align: center;margin:-200px 0 0 -250px;position: absolute;top: 50%;left: 50%;}
.formTitle{font-size: 22px;height: 50px;line-height: 50px;margin-bottom: 20px;}
.formInput{width: 400px}
.loginBtn{margin-top:20px }
</style>
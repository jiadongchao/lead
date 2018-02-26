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
                <el-input v-model="formInfo.psw" placeholder="123" type="password"></el-input>
            </el-form-item>

            <el-button class="loginBtn" type="primary" size="medium" @click="loginFn(formInfo)">登录</el-button>

        </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
    data() {
      return {
        formInfo: {
          account: '',
          psw: '',
        }
      };
    },
    methods:{
        loginFn(formInfo){
            if(formInfo.psw == 123){
                let type = formInfo.account
                switch(type){
                    case 'person':
                    this.$router.push('/Person');
                    break;
                    case 'admin':
                    this.$router.push('/Admin');
                    break;
                     case 'lead':
                    this.$router.push('/lead');
                    break;
                    default:
                    console.log("def")
                }
            }
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
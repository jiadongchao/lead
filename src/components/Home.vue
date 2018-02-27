<template>
  <div class="home">
      <div class="header">
        <h1>诉讼领导办公系统</h1>
        <div class="personInfo" v-if="personShow">
            <img class="headPic" src="../assets/logo.png">
            <span class="personName" >{{username}}</span>
            <el-button class="btnLogout" type="primary" icon="el-icon-circle-close-outline" @click="logout">注销</el-button>
        </div>
      </div>
      <router-view v-on:listenTochildEvent = "showUsername"></router-view>
  </div>  
</template>

<script>
import Login from '../views/login/Login'
import { getCookie, delCookie } from '../assets/js/cookie';
export default {
  name: 'Home',
  data () {
    return {
      personShow :false,
      username:"aaa"
    }
  },
  mounted(){
    this.loadComponents();
    this.showUsername();
  },
  methods:{
    loadComponents : function(){
      this.$router.push('/Login')
    },
    showUsername : function(data){
      if(getCookie('username')){
        this.personShow = true;
        this.username = getCookie('username');
      }
      if(data){
        this.username = data;
      }    
    },
    logout : function(){
      delCookie('username');
      this.username = ""
      this.personShow = false
      this.$router.push('/Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{height: 100%}
.header{height: 50px;}
.home h1{display: inline-block;margin: 0;font-size: 24px;line-height: 50px;height: 50px;padding-left:20px; }
.personInfo{display: inline-block;float:right;width: 200px;height: 50px;}
.headPic{width:30px;height: 30px;vertical-align: middle; }
.personName{line-height: 50px;height: 50px;}
.btnLogout{margin-top: 10px;}
</style>
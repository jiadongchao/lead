<template>
  <div class="home">
      <div class="header">
        <h1>诉讼领导办公系统</h1>
        <div class="personInfo">
            <img class="headPic" src="../assets/logo.png">
            <span class="personName">王大力</span>
        </div>
      </div>
      <router-view/>
  </div>  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{border-bottom: 2px solid blue;height: 50px;}
.home h1{display: inline-block;margin: 0;font-size: 24px;line-height: 30px;height: 30px;padding-left:20px; }
.personInfo{display: inline-block;float:right;width: 200px;}
.headPic{width:30px;height: 30px;vertical-align: middle; }
.personName{line-height: 30px;height: 30px;}
</style>
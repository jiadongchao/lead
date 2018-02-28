<template>
  <div class="person">
    <div class="header">
        <h1>我的数据</h1>
    </div>
    <!-- 内容区 -->
    <div class="content">
        <div class="contentItem">
            <h3 class="contentItem_h3">访客数据</h3>
            <ul class="contentItem_ul">
                <li class="contentItem_li_3">
                    <h4 class="contentItem_h4">访客总量</h4>
                    <p class="contentItem_span">10,000,000人</p>
                </li>
                <li class="contentItem_li_3">
                    <h4 class="contentItem_h4">访客总量</h4>
                    <p class="contentItem_span">10,000,000人</p>
                </li>
                <li class="contentItem_li_3">
                    <h4 class="contentItem_h4">访客总量</h4>
                    <p class="contentItem_span">10,000,000人</p>
                </li>                
            </ul>
        </div>
        <div class="echartsWrap">
            <div class="echartsItem" id="myChart1" ></div>
            <div class="echartsItem" id="myChart2" ></div>
            <div class="echartsItem" id="myChart3" ></div>
        </div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default{
    data(){
        return {
            option:{
                title : {
                    text: '用户访问来源',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }
        }
    },
    mounted(){
        this.drawLine()
    },
    methods:{
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart1 = echarts.init(document.getElementById('myChart1'))
            let myChart2 = echarts.init(document.getElementById('myChart2'))
            let myChart3 = echarts.init(document.getElementById('myChart3'))
            // 绘制图表
            myChart1.setOption(this.option);
            myChart2.setOption(this.option);
            myChart3.setOption(this.option);
        }  
    }
}





</script>

<style scoped>
.person{height: 100%;position: relative;padding:30px 50px 0 50px;}
.header{height: 100px;}
.header h1{font-size: 30px;line-height: 100px;}

.contentItem_h3{font-size: 24px;padding: 30px 0;}
.contentItem_ul{overflow: hidden; color: #ffffff}
.contentItem_h4{font-size: 18px;padding: 30px 0;}
.contentItem_li_3{display: inline-block;width: 28%;background: #409EFF;padding-left:20px;  margin:0 50px 30px 0;float: left;height: 250px;}
.contentItem_span{font-size: 22px;text-align: center;padding-top: 45px}

.echartsWrap{padding-top: 30px;}
.echartsItem{width: 300px;height: 200px;display: inline-block;}
</style>
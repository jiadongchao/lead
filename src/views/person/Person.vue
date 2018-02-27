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
            <div class="echarts" id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default{
    data(){
        return {

        }
    },
    mounted(){
        this.drawLine()
    },
    methods:{
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
                }]
            });
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

.echarts{width: 300px;height: 200px;}
</style>
<template>
  <div class="lead">    
    <el-tabs :tab-position="'top'" style="height: 200px;">
        <el-tab-pane label="全院数据">
            <!-- 工具栏 -->
            <div class="toolsBar">
                <el-date-picker
                    v-model="cheackDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>

                <el-select v-model="court" placeholder="请选择">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="courtBranch" placeholder="请选择部门">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="group" placeholder="请选择小组">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-popover ref="dateTypeCheckbox" placement="left-start" 
                title="" width="150" trigger="click"  >
                    <el-checkbox v-model="checked1" class="checkBoxItem">备选项1</el-checkbox>
                    <el-checkbox v-model="checked2" class="checkBoxItem">备选项2</el-checkbox>
                    <el-checkbox v-model="checked3" class="checkBoxItem">备选项3</el-checkbox>
                    <el-checkbox v-model="checked4" class="checkBoxItem">备选项4</el-checkbox>
                </el-popover>
                <el-button class="btnData" type="primary" icon="el-icon-menu"  v-popover:dateTypeCheckbox>自定义数据</el-button>
            </div>
            <!-- 内容区 -->
            <div class="content">
                <div class="contentItem">
                    <h3 class="contentItem_h3">访客数据</h3>
                    <ul class="contentItem_ul">
                        <li class="contentItem_li_2">
                            <h4 class="contentItem_h4">访客总量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_2">
                            <h4 class="contentItem_h4">访客总量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                    </ul>
                </div>
                <div class="contentItem">
                    <h3 class="contentItem_h3">诉讼服务数据</h3>
                    <ul class="contentItem_ul">
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">诉讼导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">立案导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">立案导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">立案导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">立案导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>                       
                    </ul>
                </div>
                <div class="contentItem">
                    <h3 class="contentItem_h3">社会化服务数据</h3>
                    <ul class="contentItem_ul">
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">诉讼导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>
                        <li class="contentItem_li_4">
                            <h4 class="contentItem_h4">立案导诉接待量</h4>
                            <p class="contentItem_span">10,000,000人</p>
                        </li>                     
                    </ul>
                </div>            

            </div>
        </el-tab-pane>
        <el-tab-pane label="绩效考核">
             <!-- 工具栏 -->
            <div class="toolsBar">
                <el-date-picker
                    v-model="cheackDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>

                <el-select v-model="court" placeholder="请选择">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="courtBranch" placeholder="请选择部门">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="group" placeholder="请选择小组">
                    <el-option
                    v-for="item in optionsCourt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                
                <el-button class="btnData" type="primary" icon="el-icon-search" >查询</el-button>
                <el-input class="inputUser" v-model="inputUser" placeholder="请输入内容"></el-input>

                <el-table :data="tableData3" style="width: 100%" >
                    <el-table-column prop="date" label="序号" width="150" align="center" fixed> </el-table-column>
                    <el-table-column prop="date" label="考核人员" width="150" align="center"> </el-table-column>
                    <el-table-column prop="date" label="部门(小组)" width="150" align="center"> </el-table-column>
                    <el-table-column prop="date" label="考核项目" width="150" align="center"> </el-table-column>
                    <el-table-column label="实际得分" align="center">                      
                        <el-table-column prop="province" label="第一周" width="120" align="center"></el-table-column>
                        <el-table-column prop="city" label="第二周" width="120" align="center"></el-table-column>
                        <el-table-column prop="address" label="第三周" width="120" align="center"></el-table-column>
                        <el-table-column prop="zip" label="第四周" width="120" align="center"></el-table-column>                        
                    </el-table-column>
                    <el-table-column prop="date" label="最终得分" width="150" align="center"> </el-table-column>
                    <el-table-column prop="date" label="综合评分" width="auto" align="center"> </el-table-column>


                </el-table>
            </div>
        </el-tab-pane>
    </el-tabs>



  </div>
</template>
<script>
export default{
    name: 'Lead',
    data(){
        return{
            cheackDate:"",
            optionsCourt: [{
                value: '选项1',
                label: '北京市高级人民法院'
                }, {
                value: '选项2',
                label: '北京市第一人民法院'
                }, {
                value: '选项3',
                label: '海淀人民法院'
                }, {
                value: '选项4',
                label: '北京市第三人民法院'
                }, {
                value: '选项5',
                label: '朝阳人民法院'
                }],
            court: '选项1',
            courtBranch:"",
            group:"",
            checked1:"",
            checked2:"",
            checked3:"",
            checked4:"",
            inputUser:"",
             tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                },{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }]

        }
        
    }
}

</script>

<style>
.lead{height: 100%;position: relative;padding:30px 50px 0 50px;}
.lead .el-tabs__item{font-size: 20px;}
.lead .el-date-editor{margin-right: 20px;}
.lead .el-select{margin-right: 20px;}
.lead .btnData{float:right}
.lead .checkBoxItem{width: 100%;height: 35px;text-align: center}
.lead .el-checkbox+.el-checkbox{margin-left: 0px;}

.contentItem_h3{font-size: 24px;padding: 30px 0;}
.contentItem_ul{overflow: hidden; color: #ffffff}
.contentItem_h4{font-size: 18px;padding: 30px 0;}
.contentItem_li_2{display: inline-block;width: 45%;background: #409EFF;padding-left:20px;  margin:0 50px 30px 0;float: left;height: 150px;}
.contentItem_span{font-size: 22px;text-align: center}
.contentItem_li_4{display: inline-block;width: 20.5%;background: #409EFF;padding-left:20px; margin:0 50px 30px 0;float: left;height: 150px;}

.inputUser{width: 300px;float: right;margin-right:20px; }

.lead .el-table{margin-top: 30px;}
</style>
<template>
  <div class="admin">
      <el-tabs :tab-position="'top'" style="">
        <el-tab-pane label="人员管理" style="">
            <el-tabs class="verticalNav" :tab-position="'left'" style="height: 800px">
                <el-tab-pane label="部门管理">
                    <div>
                        <p class="adds">当前位置>人员管理>部门管理</p>
                    </div>
                    <div class="toolBar">
                        <span>选择法院</span>
                        <el-select v-model="court" placeholder="请选择">
                            <el-option
                                v-for="item in optionsCourt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button class="btnOrg" type="primary" icon="el-icon-share" >导入组织架构</el-button>
                    </div>
                    <div class="tableWrap">
                        <el-table :data="tableData"  border style="width: 100%">
                            <el-table-column  prop="section" align="center" label="部门" width="180" fixed></el-table-column>
                            <el-table-column  prop="group"   align="center" label="小组" width="180"></el-table-column>
                            <el-table-column  prop="group"   align="center" label="小组" width="180"></el-table-column>
                            <el-table-column  prop="group"   align="center" label="小组" width="180"></el-table-column>
                            <el-table-column  prop="remark"  align="center" label="备注" width="auto"></el-table-column>
                            <el-table-column  prop="handle"  align="center" label="操作" width="500">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small">编辑</el-button>
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small">关联考评模板</el-button>
                                </template>    
                            </el-table-column>                        
                        </el-table>
                    </div>


                </el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="考评管理"></el-tab-pane>
        <el-tab-pane label="指令下发"></el-tab-pane>
        <el-tab-pane label="预警消息"></el-tab-pane>
        <el-tab-pane label="系统管理"></el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
export default{
    data(){
        return {
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
                tableData: [{
                    section: '诉服办',
                    group: '导诉接待',
                    remark:'备注、备注、备注',
                    handle:''
                    },{
                    section: '诉服办',
                    group: '导诉接待',
                    remark:'备注、备注、备注',
                    handle:''
                    },{
                    section: '诉服办',
                    group: '导诉接待',
                    remark:'备注、备注、备注',
                    handle:''
                    }]
        }
    }
}
</script>
<style>
.admin{position: relative;padding:30px 50px 0 50px;}
.el-tabs__header.is-top{margin-bottom: 0;}
.admin .el-tabs__item{font-size: 20px;}

.btnOrg{float: right}
.verticalNav .el-tabs__nav-scroll{padding-top: 20px;}
.verticalNav .el-tab-pane{padding: 20px 0 0 20px}
.el-tabs__item.is-left{height: 50px;font-size: 18px;line-height: 50px;}

.toolBar{padding: 20px 0 0 0}
.tableWrap{padding-top: 20px}
</style>
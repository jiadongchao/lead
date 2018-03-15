<template>
  <div class="admin">
      <el-tabs :tab-position="'top'" style="">
        <el-tab-pane label="人员管理" style="">
            <el-tabs class="verticalNav" :tab-position="'left'" style="height: 800px;">
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
                        <el-button type="primary" @click="dialogFormVisible = true" icon="el-icon-circle-plus-outline">新建部门</el-button>
                        <el-button type="primary" @click="dialogFormVisible_group = true" icon="el-icon-circle-plus-outline">新建小组</el-button>

                        <el-button class="btnOrg" type="primary" icon="el-icon-share" >导入组织架构</el-button>
                    </div>
                    <div class="tableWrap">
                        <el-table :data="tableData" fixed border style="width: 100%">
                            <el-table-column  prop="section" align="center" label="部门" width="180" fixed></el-table-column>
                            <el-table-column  prop="group"   align="center" label="小组" width="180"></el-table-column>
                            <el-table-column  prop="remark"  align="center" label="备注" width="auto"></el-table-column>
                            <el-table-column  prop="handle"  align="center" label="操作" width="500">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
                                    <el-button type="text" size="small" @click="handleDelete(scope.$index, tableData)" >删除</el-button>
                                    <el-button type="text" size="small">关联考评模板</el-button>
                                </template>    
                            </el-table-column>                        
                        </el-table>
                    </div>
                    <el-dialog class="newBranch" title="新建部门" :visible.sync="dialogFormVisible"   width="30%">
                        <el-form :model="dialogNewBranchform">
                            <el-form-item label="部门名称" :label-width="'150px'">
                                <el-input v-model="dialogNewBranchform.name" auto-complete="off" width="217px" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="考评模板" :label-width="'150px'">
                                <el-select v-model="dialogNewBranchform.region" placeholder="请选择模板">
                                    <el-option
                                        v-for="item in optionsMuban"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="备注信息" :label-width="'150px'">
                                <el-input type="textarea" :rows="4" placeholder="请输入内容" dialogNewBranchform.textarea>
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer"  >
                            <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                        </div>
                    </el-dialog>
                    <el-dialog class="newGroup" title="新建小组" :visible.sync="dialogFormVisible_group"   width="30%">
                        <el-form :model="dialogNewGroupform">

                            <el-form-item label="选择部门" :label-width="'150px'">
                                <el-select v-model="dialogNewGroupform.region" placeholder="请选择部门">
                                    <el-option
                                        v-for="item in optionsSection"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="小组名称" :label-width="'150px'">
                                <el-input v-model="dialogNewGroupform.name" auto-complete="off" width="217px" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="考评模板" :label-width="'150px'">
                                <el-select v-model="dialogNewGroupform.muban" placeholder="请选择模板">
                                    <el-option
                                        v-for="item in optionsMuban"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer"  >
                            <el-button type="primary" @click="dialogFormVisible_group = false">保 存</el-button>
                            <el-button @click="dialogFormVisible_group = false">取 消</el-button>
                        </div>
                    </el-dialog>

                </el-tab-pane>
                <el-tab-pane label="人员列表">
                    <div>
                        <p class="adds">当前位置>人员管理>人员列表</p>
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
                        <el-button type="primary" @click="dialogFormPerson = true" icon="el-icon-circle-plus-outline">添加人员</el-button>
                    </div>
                    <div class="tableWrap">
                        <el-table :data="PersonTableData" fixed border style="width: 100%">
                            <el-table-column  prop="name"    align="center" label="姓名" width="180" fixed></el-table-column>
                            <el-table-column  prop="section" align="center" label="部门" width="180" fixed></el-table-column>
                            <el-table-column  prop="group"   align="center" label="小组" width="180"></el-table-column>
                            <el-table-column  prop="remark"  align="center" label="岗位" width="180"></el-table-column>
                            <el-table-column  prop="muban"   align="center" label="模板" width="180"></el-table-column>
                            <el-table-column  prop="handle"  align="center" label="操作" width="500">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="addPersonHandleEdit(scope.$index, scope.row)" >编辑</el-button>
                                    <el-button type="text" size="small" @click="addPersonHandleDelete(scope.$index, PersonTableData)" >删除</el-button>
                                    <el-button type="text" size="small">关联考评模板</el-button>
                                </template>    
                            </el-table-column>                        
                        </el-table>
                    </div>
                    <el-dialog class="newPerson" title="添加人员" :visible.sync="dialogFormPerson"   width="30%">
                        <el-form :model="dialogNewPerson">
                            <el-form-item label="人员名称" :label-width="'150px'">
                                <el-input v-model="dialogNewPerson.name" auto-complete="off" width="217px" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="选择部门" :label-width="'150px'">
                                <el-select v-model="dialogNewPerson.section" placeholder="请选择部门">
                                    <el-option
                                        v-for="item in optionsSection"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="选择小组" :label-width="'150px'">
                                <el-select v-model="dialogNewPerson.group" placeholder="请选择小组">
                                    <el-option
                                        v-for="item in optionsGroup"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="岗位名称" :label-width="'150px'">
                                <el-input v-model="dialogNewPerson.remark" auto-complete="off" width="217px" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="考评模板" :label-width="'150px'">
                                <el-select v-model="dialogNewPerson.muban" placeholder="请选择模板">
                                    <el-option
                                        v-for="item in optionsMuban"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary"   @click="addPersonSave">保 存</el-button>
                            <el-button @click="addPersonCancel" >取 消</el-button>
                        </div>
                    </el-dialog>

                </el-tab-pane>

            </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="考评管理">
            <el-tabs class="verticalNav" :tab-position="'left'" style="height: 800px">
                <el-tab-pane label="部门管理">
                    <div>
                        <p class="adds">当前位置>考评管理>考评指标模板</p>
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
                        <el-button type="primary"  icon="el-icon-circle-plus-outline">新建模板</el-button>
                    </div>
                    <div class="tableWrap">
                        <el-table :data="mubanTableData" fixed border style="width: 100%">
                            <el-table-column  prop="name" align="center" label="模板名称" width="180" fixed></el-table-column>
                            <el-table-column  prop="qin"  align="center" label="勤" width="auto"></el-table-column>
                            <el-table-column  prop="ji"   align="center" label="绩" width="auto"></el-table-column>
                            <el-table-column  prop="de"   align="center" label="德" width="auto"></el-table-column>
                            <el-table-column  prop="neng" align="center" label="能" width="auto"></el-table-column>
                            <el-table-column  prop="lian" align="center" label="廉" width="auto"></el-table-column>
                            <el-table-column  prop="handle"  align="center" label="操作" width="200">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>
                                    <el-button type="text" size="small" @click="handleDelete(scope.$index, tableData)" >删除</el-button>
                                </template>    
                            </el-table-column>
                        </el-table>
                    </div>


                </el-tab-pane>
            </el-tabs>                
        </el-tab-pane>
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
                court: '选项1',
                // 选择法院 下拉框
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
                // 选择部门 下拉框
                optionsSection:[{
                    value: '部门1',
                    label: '部门1'
                    }, {
                    value: '部门2',
                    label: '部门2'
                    }, {
                    value: '部门3',
                    label: '部门3'
                    },
                ],
                // 选择部门 下拉框
                optionsGroup:[{
                    value: '小组1',
                    label: '小组1'
                    }, {
                    value: '小组2',
                    label: '小组2'
                    }, {
                    value: '小组3',
                    label: '小组3'
                    },
                ],
                // 选择模板 下拉框
                optionsMuban:[{
                    value: '模板1',
                    label: '模板1'
                    }, {
                    value: '模板2',
                    label: '模板2'
                    }, {
                    value: '模板3',
                    label: '模板3'
                    },
                ],
                //部门管理 >表格数据
                tableData: [{
                    section: '诉服办1',
                    group: '导诉接待1',
                    remark:'备注、备注、备注111',
                    handle:''
                    },{
                    section: '诉服办2',
                    group: '导诉接待',
                    remark:'备注、备注、备注2222',
                    handle:''
                    },{
                    section: '诉服办3',
                    group: '导诉接待',
                    remark:'备注、备注、备注333',
                    handle:''
                    }],
                //新建部门表单，显示状态
                dialogFormVisible:false,  
                //人员列表 >表格数据
                PersonTableData: [{
                    name:'张三',
                    section: '诉服办1',
                    group: '导诉接待1',
                    remark:'窗口法官1',
                    muban:'考评模板1'
                    },{
                    name:'李四',
                    section: '诉服办2',
                    group: '导诉接待',
                    remark:'窗口法官2',
                    muban:'考评模板2'
                    },{
                    name:'王五',
                    section: '诉服办3',
                    group: '导诉接待',
                    remark:'窗口法官2',
                    muban:'考评模板2'
                    }],
                //记录添加人员弹窗 ，是从哪里打开, 添加按钮打开 设置为0    
                personFlug :0,
               
               
               //添加人员表单，显示状态
                dialogFormPerson:false, 
                // 人员列表 >添加人员表单>信息
                dialogNewPerson:{ 
                    name:'',            //人员名称
                    section: '',        //选择部门
                    group: '',          //选择小组
                    remark:'',          //岗位名称
                    muban:''           //考评模板
                },     

                // 部门管理 >新建部门 >弹窗信息
                dialogNewBranchform:{ 
                    name:'',
                    template:'',
                    textarea:'',
                },
                // 考评管理 > 考评指标模板 表格 
                 //添加小组，显示状态
                dialogFormVisible_group:false,        
                mubanTableData: [{
                    name: '导诉窗口考评',
                    qin: '接待总量：权重10；目标值150~200，目标得分80分；低于目标值，得60分；高于目标值，得100分',
                    ji:'1.诉服接待量权重5；目标值75~100，目标得分40分；低于目标值，得30分；高于目标值，得50分 2.立案接待量权重5；目标值75~100，目标得分40分；低于目标值，得30分；高于目标值，得50分',
                    de:'XXX评分：权重10；目标值85~90，目标得分80分；低于目标值，得60分；高于目标值，得100分',
                    neng:'XXX评分：权重10；目标值85~90，目标得分80分；低于目标值，得60分；高于目标值，得100分',
                    lian:'XXX评分：权重10；目标值85~90，目标得分80分；低于目标值，得60分；高于目标值，得100分'
                }],
                dialogNewGroupform:{ 
                    name:'',
                    template:'',
                    muban:'',
                },

        }       
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, rows) {
            //console.log(index, row);
            rows.splice(index, 1);
        },
        // 当前位置>人员管理>人员列表 表格的> 编辑
        addPersonHandleEdit(index, row) {
            //console.log(index, row);
            this.personFlug = index;
            this.dialogFormPerson = true;
            this.dialogNewPerson.name = row.name;
            this.dialogNewPerson.section = row.section;
            this.dialogNewPerson.group = row.group;
            this.dialogNewPerson.remark = row.remark;
            this.dialogNewPerson.muban = row.muban;
        },
        // 当前位置>人员管理>人员列表 表格的> 删除
        addPersonHandleDelete(index, table) {
            //console.log(index, row);
            table.splice(index, 1);
        },
        // 当前位置>人员管理>人员列表 添加人员弹窗 >保存按钮
        addPersonSave(){
            if(this.personFlug == 0){ //0表示从添加人员打开的 表单
                let obj =  JSON.parse(JSON.stringify(this.dialogNewPerson))
                this.PersonTableData.push(obj);
                for(let k in this.dialogNewPerson){
                    this.dialogNewPerson[k] = "";
                }
            }else{
                let i = this.personFlug; //i！=0表示从表格 编辑打开 并记录下标
                let obj =  JSON.parse(JSON.stringify(this.dialogNewPerson))
                this.PersonTableData.splice(i,1,obj)
                for(let k in this.dialogNewPerson){
                    this.dialogNewPerson[k] = "";
                }
                this.personFlug = 0;
            }

            this.dialogFormPerson = false;
        },
         // 当前位置>人员管理>人员列表 添加人员弹窗 >取消按钮
        addPersonCancel(){
            for(let k in this.dialogNewPerson){
                this.dialogNewPerson[k] = "";
            }
            this.dialogFormPerson = false;
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
.verticalNav .el-tab-pane{padding: 20px 0 0 20px;}
.verticalNav .el-tabs__nav-wrap{width: 150px;}
.el-tabs__item.is-left{height: 50px;font-size: 18px;line-height: 50px;}


.toolBar{padding: 20px 0 0 0;}
.tableWrap{padding-top: 20px;}

/* dilog 新建部门 */
.newBranch .el-dialog__body{padding: 30px 20px 0 20px}
.newBranch .el-form-item .el-input {width: 271px;}
.newBranch .dialog-footer{text-align: center}
/* dilog 新建小组 */
.newGroup .el-input__inner{width: 217px;}
.newGroup .dialog-footer{text-align: center}

/* dilog 添加人员 */
.newPerson .el-input__inner{width: 300px;}
.newPerson .dialog-footer{text-align: center}
</style>
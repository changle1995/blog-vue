<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-row slot="header" type="flex" justify="center">
        <el-col :span="3">
          <el-button size="small" type="primary" @click="get">刷新</el-button>
        </el-col>
        <el-col :span="3">
          <el-button size="small" type="primary" v-if="canAdd === 'yes'" @click="add">新增</el-button>
        </el-col>
      </el-row>
      <el-table :data="listShow">
        <el-table-column type="index" label="序号" width="50px" :index="(index) => {return index + 1}"></el-table-column>
        <el-table-column prop="name" label="权限名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="url" label="权限路径" show-overflow-tooltip></el-table-column>
        <el-table-column prop="method" label="权限方法" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" label="权限描述" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="150" align="center" v-if="canEdit === 'yes' || canDelete === 'yes'">
          <template slot-scope="scope">
            <el-button size="mini" v-if="canEdit === 'yes'" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" v-if="canDelete === 'yes'" type="danger" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="list.length">
        </el-pagination>
      </div>
    </el-card>

    <el-dialog title="权限信息" :visible.sync="dialog.visible" @close="clearForm">
      <el-form :model="dialog.permission">
        <el-form-item label="权限名称" label-width="120px">
          <el-input v-model="dialog.permission.name"></el-input>
        </el-form-item>
        <el-form-item label="权限路径" label-width="120px">
          <el-input v-model="dialog.permission.url"></el-input>
        </el-form-item>
        <el-form-item label="权限方法" label-width="120px">
          <el-input v-model="dialog.permission.method"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" label-width="120px">
          <el-input v-model="dialog.permission.description"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="clearForm">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import * as permissionApi from '../../api/permission'
  import * as util from '../../../../utils'

  export default {
    name: "display",
    data() {
      return {
        list: [],
        listShow: [],
        page: 1,
        pageSize: 8,
        dialog: {
          visible: false,
          addOrEdit: '',
          permission: {}
        }
      }
    },
    methods: {
      // 新增按钮对应的方法
      add() {
        this.dialog.addOrEdit = 'add'
        this.dialog.visible = true
      },
      // 编辑按钮对应的方法
      edit(permission) {
        this.dialog.permission = JSON.parse(JSON.stringify(permission))
        this.dialog.addOrEdit = 'edit'
        this.dialog.visible = true
      },
      // 删除按钮对应的方法
      del(permission, showSuccessMessage = true) {
        permissionApi.del(permission.id)
          .then(response => {
            if (showSuccessMessage) {
              this.$message(util.createElementMessage('恭喜你，删除成功', 'success'))
            }
            this.get(false)
          })
      },
      // 分页方法
      handleCurrentChange(page = 1) {
        this.listShow = this.list.slice((page - 1) * this.pageSize, page * this.pageSize)
      },
      // dialog取消按钮对应方法
      clearForm() {
        this.dialog.visible = false
        this.dialog.permission = {}
        this.dialog.addOrEdit = ''
      },
      // dialog确定按钮对应方法
      dialogSubmit(showSuccessMessage = true) {
        if (this.dialog.addOrEdit === 'edit') {
          permissionApi.edit(this.dialog.permission)
            .then(response => {
              if (showSuccessMessage) {
                this.$message(util.createElementMessage('恭喜你，修改成功', 'success'))
              }
              this.get(false)
            })
        } else if (this.dialog.addOrEdit === 'add') {
          permissionApi.add(this.dialog.permission)
            .then(response => {
              if (showSuccessMessage) {
                this.$message(util.createElementMessage('恭喜你，添加成功', 'success'))
              }
              this.get(false)
            })
        }
        this.clearForm()
      },
      // 获取数据方法
      get(showSuccessMessage = true) {
        permissionApi.get()
          .then(data => {
              this.list = data
              if (showSuccessMessage) {
                this.$message(util.createElementMessage('获取数据成功', 'success'))
              }
              this.handleCurrentChange(this.page = 1)
            }
          )
      }
    },
    props: {
      canAdd: {
        type: String,
        default: ''
      },
      canDelete: {
        type: String,
        default: ''
      },
      canEdit: {
        type: String,
        default: ''
      }
    },
    created() {
      this.get(false)
    }
  }
</script>

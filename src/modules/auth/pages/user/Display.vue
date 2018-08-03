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
        <el-table-column prop="username" label="用户名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phoneNumber" label="手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="description" label="用户描述" show-overflow-tooltip></el-table-column>
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

    <el-dialog title="用户信息" :visible.sync="dialog.visible" @close="clearForm">
      <el-form :model="dialog.user">
        <el-form-item label="用户名称" label-width="120px">
          <el-input v-model="dialog.user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="120px">
          <el-input type="password" v-model="dialog.user.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="120px">
          <el-input v-model="dialog.user.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" label-width="120px">
          <el-input v-model="dialog.user.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="用户描述" label-width="120px">
          <el-input v-model="dialog.user.description"></el-input>
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
  import * as userApi from '../../api/user'

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
          user: {}
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
      edit(user) {
        this.dialog.user = JSON.parse(JSON.stringify(user))
        this.dialog.addOrEdit = 'edit'
        this.dialog.visible = true
      },
      // 删除按钮对应的方法
      del(user, showSuccessMessage = true) {
        userApi.del(user.id)
          .then(response => {
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
        this.dialog.user = {}
        this.dialog.addOrEdit = ''
      },
      // dialog确定按钮对应方法
      dialogSubmit(showSuccessMessage = true) {
        if (this.dialog.addOrEdit === 'edit') {
          userApi.edit(this.dialog.user)
            .then(response => {
              this.get(false)
            })
        } else if (this.dialog.addOrEdit === 'add') {
          userApi.add(this.dialog.user)
            .then(response => {
              this.get(false)
            })
        }
        this.clearForm()
      },
      // 获取数据方法
      get(showSuccessMessage = true) {
        userApi.get()
          .then(data => {
            this.list = data
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

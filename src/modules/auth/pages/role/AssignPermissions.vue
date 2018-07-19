<template>
  <el-card class="box-card" shadow="always">
    <el-row slot="header" type="flex" justify="center" align="middle">
      <el-col :span="6">请选择角色：</el-col>
      <el-col :span="6">
        <el-select v-model="select.selectedValue" clearable filterable placeholder="请选择" @change="selectChange">
          <el-option
            v-for="item in select.options"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        filterable
        v-model="transfer.rightValue"
        :props="transfer.props"
        :titles="transfer.titles"
        :button-texts="transfer.buttonTexts"
        :data="transfer.data"
        @change="transferChange">
      </el-transfer>
    </div>
  </el-card>
</template>

<script>
  import * as roleApi from '../../api/role'
  import * as permissionApi from '../../api/permission'
  import * as assignPermissions from '../../api/assignPermissions'

  export default {
    name: "assign-permissions",
    data() {
      return {
        select: {
          selectedValue: '',
          options: []
        },
        transfer: {
          rightValue: [],
          props: {key: 'id', label: 'name'},
          titles: ['未拥有权限', '已拥有权限'],
          buttonTexts: ['删除权限', '添加权限'],
          data: []
        }
      }
    },
    methods: {
      setTransferDataDisabled(disabled) {
        this.transfer.data = this.transfer.data.map(item => {
          item.disabled = disabled
          return item
        })
      },
      getSelectOptions() {
        roleApi.get()
          .then(data => {
            this.select.options = data
          })
      },
      getTransferData() {
        permissionApi.get()
          .then(data => {
            this.transfer.data = data
            this.setTransferDataDisabled(true)
          })
      },
      selectChange(roleId) {
        if (typeof roleId === 'number') {
          this.setTransferDataDisabled(false)
          let role = this.select.options.filter(role => {
            return role.id === roleId
          }).pop()
          roleApi.get(role.name)
            .then(data => {
              this.transfer.rightValue = data[0]['permissionSet'].map(permission => {
                return permission.id
              })
            })
        } else {
          this.transfer.rightValue = []
          this.setTransferDataDisabled(true)
        }
      },
      transferChange(value, direction, movedKeys) {
        if (typeof this.select.selectedValue === 'number') {
          if (direction === 'right') {
            assignPermissions.add(this.select.selectedValue, movedKeys)
          } else {
            assignPermissions.del(this.select.selectedValue, movedKeys)
          }
        }
      }
    },
    created() {
      this.getSelectOptions()
      this.getTransferData()
    }
  }
</script>

<template>
  <el-card class="box-card" shadow="always">
    <el-row slot="header" type="flex" justify="center" align="middle">
      <el-col :span="6">请选择用户：</el-col>
      <el-col :span="6">
        <el-select v-model="select.selectedValue" clearable filterable placeholder="请选择" @change="selectChange">
          <el-option
            v-for="item in select.options"
            :key="item.id"
            :label="item.username"
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
  import * as userApi from '../../api/user'
  import * as roleApi from '../../api/role'
  import * as assignRoles from '../../api/assignRoles'
  import config from '../../../../config'
  import * as util from '../../../../utils'

  export default {
    name: "assign-roles",
    data() {
      return {
        select: {
          selectedValue: '',
          options: []
        },
        transfer: {
          rightValue: [],
          props: {key: 'id', label: 'name'},
          titles: ['未拥有角色', '已拥有角色'],
          buttonTexts: ['删除角色', '添加角色'],
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
        userApi.get()
          .then(response => {
            if (util.responseSuccess(response)) {
              this.select.options = response.data[config.RESPONSE.DATA]
            } else {
              this.$router.push('/login')
              location.reload()
            }
          })
          .catch(error => {
            this.$router.push('/login')
            location.reload()
          })
      },
      getTransferData() {
        roleApi.get()
          .then(response => {
            if (util.responseSuccess(response)) {
              this.transfer.data = response.data[config.RESPONSE.DATA]
              this.setTransferDataDisabled(true)
            } else {
              this.$router.push('/login')
              location.reload()
            }
          })
          .catch(error => {
            this.$router.push('/login')
            location.reload()
          })
      },
      selectChange(userId) {
        if (typeof userId === 'number') {
          this.setTransferDataDisabled(false)
          let user = this.select.options.filter(user => {
            return user.id === userId
          }).pop()
          userApi.get(user.username)
            .then(response => {
              if (util.responseSuccess(response)) {
                this.transfer.rightValue = response.data[config.RESPONSE.DATA][0]['roleSet'].map(role => {
                  return role.id
                })
              } else {
                this.$router.push('/login')
                location.reload()
              }
            })
            .catch(error => {
              this.$router.push('/login')
              location.reload()
            })
        } else {
          this.transfer.rightValue = []
          this.setTransferDataDisabled(true)
        }
      },
      transferChange(value, direction, movedKeys) {
        if (typeof this.select.selectedValue === 'number') {
          if (direction === 'right') {
            assignRoles.add(this.select.selectedValue, movedKeys)
              .then(response => {
                if (!util.responseSuccess(response)) {
                  this.$router.push('/login')
                  location.reload()
                }
              })
              .catch(error => {
                this.$router.push('/login')
                location.reload()
              })
          } else {
            assignRoles.del(this.select.selectedValue, movedKeys)
              .then(response => {
                if (!util.responseSuccess(response)) {
                  this.$router.push('/login')
                  location.reload()
                }
              })
              .catch(error => {
                this.$router.push('/login')
                location.reload()
              })
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

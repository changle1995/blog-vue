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
        <span slot-scope="{option}">{{option.name}} {{option.propertyName}} {{option.propertyValue}}</span>
      </el-transfer>
    </div>
  </el-card>
</template>

<script>
  import * as roleApi from '../../api/role'
  import * as routeApi from '../../api/route'
  import * as assignRoutes from '../../api/assignRoutes'

  export default {
    name: "assign-routes",
    data() {
      return {
        select: {
          selectedValue: '',
          options: []
        },
        transfer: {
          rightValue: [],
          props: {key: 'id', label: 'name'},
          titles: ['未拥有路由', '已拥有路由'],
          buttonTexts: ['删除路由', '添加路由'],
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
        routeApi.get()
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
              this.transfer.rightValue = data[0]['routeSet'].map(route => {
                return route.id
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
            assignRoutes.add(this.select.selectedValue, movedKeys)
          } else {
            assignRoutes.del(this.select.selectedValue, movedKeys)
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

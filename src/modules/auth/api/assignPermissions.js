import axios from '../../../config/axios'

export const add = (roleId, permissionIdCollection) => {
  return axios.post('/rolePermission/', {roleId, permissionIdCollection})
}

export const del = (roleId, permissionIdCollection) => {
  return axios.put('/rolePermission/', {roleId, permissionIdCollection})
}

import axios from '../../../config/axios'

export const add = (roleId, routeIdCollection) => {
  return axios.post('/roleRoute/', {roleId, routeIdCollection})
}

export const del = (roleId, routeIdCollection) => {
  return axios.put('/roleRoute/', {roleId, routeIdCollection})
}

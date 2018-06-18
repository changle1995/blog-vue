import axios from '../../../config/axios'

export const add = (userId, roleIdCollection) => {
  return axios.post('/userRole/', {userId, roleIdCollection})
}

export const del = (userId, roleIdCollection) => {
  return axios.put('/userRole/', {userId, roleIdCollection})
}

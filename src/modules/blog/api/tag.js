import axios from '../../../config/axios'
import qs from 'qs'

export const get = ({name} = {}) => {
  return axios.get('/tag/?' + qs.stringify({name}))
}

export const add = ({name}) => {
  return axios.post('/tag/', qs.stringify({name}))
}

export const edit = ({id, name}) => {
  return axios.put('/tag/', qs.stringify({id, name}))
}

export const del = (id) => {
  return axios.delete('/tag/' + id)
}

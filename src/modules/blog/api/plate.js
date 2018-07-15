import axios from '../../../config/axios'
import qs from 'qs'

export const get = ({name} = {}) => {
  return axios.get('/plate/?' + qs.stringify({name}))
}

export const add = ({name, description, state}) => {
  return axios.post('/plate/', qs.stringify({name, description, state}))
}

export const edit = ({id, name, description, state}) => {
  return axios.put('/plate/', qs.stringify({id, name, description, state}))
}

export const del = (id) => {
  return axios.delete('/plate/' + id)
}

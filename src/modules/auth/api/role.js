import axios from '../../../config/axios'
import qs from 'qs'

export const get = (name) => {
  return axios.get('/role/?' + qs.stringify({name}))
}

export const add = ({name, description}) => {
  return axios.post('/role/', qs.stringify({name, description}))
}

export const edit = ({id, name, description}) => {
  return axios.put('/role/', qs.stringify({id, name, description}))
}

export const del = (id) => {
  return axios.delete('/role/' + id)
}

import axios from '../../../config/axios'
import qs from 'qs'

export const get = (name) => {
  return axios.get('/permission/?' + qs.stringify({name}))
}

export const add = ({name, url, method, description}) => {
  return axios.post('/permission/', qs.stringify({name, url, method, description}))
}

export const edit = ({id, name, url, method, description}) => {
  return axios.put('/permission/', qs.stringify({id, name, url, method, description}))
}

export const del = (id) => {
  return axios.delete('/permission/' + id)
}

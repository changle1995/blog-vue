import axios from '../../../config/axios'
import qs from 'qs'

export const get = (name) => {
  return axios.get('/route/?' + qs.stringify({name}))
}

export const add = ({name, propertyName, propertyValue, description, level, parentName}) => {
  return axios.post('/route/', qs.stringify({name, propertyName, propertyValue, description, level, parentName}))
}

export const edit = ({id, name, propertyName, propertyValue, description, level, parentName}) => {
  return axios.put('/route/', qs.stringify({id, name, propertyName, propertyValue, description, level, parentName}))
}

export const del = (id) => {
  return axios.delete('/route/' + id)
}

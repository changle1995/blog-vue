import axios from '../../../config/axios'
import qs from 'qs'

export const get = ({id, title, plateId, weight} = {}) => {
  return axios.get('/article/?' + qs.stringify({id, title, plateId, weight}))
}

export const add = ({title, description, content, tag, userId, plateId, weight, thumbnail}) => {
  return axios.post('/article/', qs.stringify({title, description, content, tag, userId, plateId, weight, thumbnail}, {arrayFormat: 'repeat'}))
}

export const edit = ({id, title, description, content, tag, userId, plateId, weight, thumbnail}) => {
  return axios.put('/article/', qs.stringify({id, title, description, content, tag, userId, plateId, weight, thumbnail}, {arrayFormat: 'repeat'}))
}

export const del = (id) => {
  return axios.delete('/article/' + id)
}

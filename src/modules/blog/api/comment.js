import axios from '../../../config/axios'
import qs from 'qs'

export const get = ({articleId} = {}) => {
  return axios.get('/comment/?' + qs.stringify({articleId}))
}

export const add = ({articleId, commentId, userId, content}) => {
  return axios.post('/comment/', qs.stringify({articleId, commentId, userId, content}))
}

export const edit = ({id, content}) => {
  return axios.put('/comment/', qs.stringify({id, content}))
}

export const del = (id) => {
  return axios.delete('/comment/' + id)
}

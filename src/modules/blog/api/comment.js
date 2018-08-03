import axios from '../../../config/axios'
import qs from 'qs'

export const addComment = ({articleId, commentId, userId, content}) => {
  return axios.post('/comment/', qs.stringify({articleId, commentId, userId, content}))
}

export const deleteComment = (id) => {
  return axios.delete('/comment/' + id)
}

export const editComment = ({id, content}) => {
  return axios.put('/comment/', qs.stringify({id, content}))
}

export const getPageableComments = ({pageNumber = 0, pageSize = 8} = {}) => {
  return axios.get('/comment/?' + qs.stringify({pageNumber, pageSize}))
}

export const getPageableCommentsByArticleId = (articleId, {pageNumber = 0, pageSize = 8} = {}) => {
  return axios.get('/comment/getByArticleId?' + qs.stringify({articleId, pageNumber, pageSize}))
}

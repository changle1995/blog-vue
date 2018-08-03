import axios from '../../../config/axios'
import qs from 'qs'

export const addArticle = ({title, description, content, tag, userId, plateId, weight, thumbnail}) => {
  return axios.post('/article/', qs.stringify(
    {
      title,
      description,
      content,
      tag,
      userId,
      plateId,
      weight,
      thumbnail
    }, {arrayFormat: 'repeat'}))
}

export const deleteArticle = (id) => {
  return axios.delete('/article/' + id)
}

export const editArticle = ({id, title, description, content, tag, userId, plateId, weight, thumbnail}) => {
  return axios.put('/article/', qs.stringify(
    {
      id,
      title,
      description,
      content,
      tag,
      userId,
      plateId,
      weight,
      thumbnail
    }, {arrayFormat: 'repeat'}))
}

export const getPageableArticles = ({pageNumber = 0, pageSize = 8} = {}) => {
  return axios.get('/article/?' + qs.stringify({pageNumber, pageSize}))
}

export const getArticleById = (id) => {
  return axios.get('/article/getById?' + qs.stringify({id}))
}

export const getPageableArticlesByPlateId = (plateId, {pageNumber = 0, pageSize = 8} = {}) => {
  return axios.get('/article/getByPlateId?' + qs.stringify({plateId, pageNumber, pageSize}))
}

export const getPageableArticlesByWeight = (weight, {pageNumber = 0, pageSize = 8} = {}) => {
  return axios.get('/article/getByWeight?' + qs.stringify({weight, pageNumber, pageSize}))
}

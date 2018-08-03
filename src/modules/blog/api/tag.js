import axios from '../../../config/axios'
import qs from 'qs'

export const addTag = ({name}) => {
  return axios.post('/tag/', qs.stringify({name}))
}

export const deleteTag = (id) => {
  return axios.delete('/tag/' + id)
}

export const editTag = ({id, name}) => {
  return axios.put('/tag/', qs.stringify({id, name}))
}

export const getAllTags = () => {
  return axios.get('/tag/')
}

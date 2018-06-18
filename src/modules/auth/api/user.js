import axios from '../../../config/axios'
import qs from 'qs'

export const get = (username) => {
  return axios.get('/user/?' + qs.stringify({username}))
}

export const add = ({username, password, email, phoneNumber, description}) => {
  return axios.post('/user/', qs.stringify({username, password, email, phoneNumber, description}))
}

export const edit = ({id, username, password, email, phoneNumber, description}) => {
  return axios.put('/user/', qs.stringify({id, username, password, email, phoneNumber, description}))
}

export const del = (id) => {
  return axios.delete('/user/' + id)
}

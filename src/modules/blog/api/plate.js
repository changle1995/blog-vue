import axios from '../../../config/axios'
import qs from 'qs'

export const addPlate = ({name, description, state = 1}) => {
  return axios.post('/plate/', qs.stringify({name, description, state}))
}

export const deletePlate = (id) => {
  return axios.delete('/plate/' + id)
}

export const editPlate = ({id, name, description, state}) => {
  return axios.put('/plate/', qs.stringify({id, name, description, state}))
}

export const getAllPlates = () => {
  return axios.get('/plate/')
}

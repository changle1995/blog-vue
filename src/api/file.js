import axios from '../config/axios'

/*  文件上传  */
export const upload = (file) => {
  let formData = new FormData()
  formData.append('file', file)
  return axios.post('file/upload', formData)
}

import config from '..'
import {container, QuillWatch} from 'quill-image-extend-module'

export const editorOption = {
  modules: {
    ImageExtend: {
      loading: true,
      name: 'file',
      action: config.BASE_URL + 'file/upload',
      response: (res) => {
        return config.BASE_URL + 'file/' + res.data
      },
      headers: (xhr) => {
        xhr.withCredentials = true
        xhr.setRequestHeader(config.REQUEST.HEADER.USER_TOKEN, JSON.parse(localStorage.getItem(config.LOCAL_STORAGE.USER))[config.LOCAL_STORAGE.USER_VALUE.USER_TOKEN])
      }
    },
    imageDrop: true,
    imageResize: true,
    toolbar: {
      container: container,
      handlers: {
        'image': function () {
          QuillWatch.emit(this.quill.id)
        }
      }
    }
  }
}

export default editorOption

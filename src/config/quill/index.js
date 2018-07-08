import config from '..'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
import {ImageDrop} from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'

VueQuillEditor.Quill.register('modules/ImageExtend', ImageExtend)
VueQuillEditor.Quill.register('modules/imageDrop', ImageDrop)
// VueQuillEditor.Quill.register('modules/imageResize', ImageResize)//注册会有警告,只需import即可,在ImageResize最后有自动注册

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

export default VueQuillEditor

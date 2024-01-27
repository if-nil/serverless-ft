import { api } from '../service/service.js';

const file = {
  getFilesList() {
    //获取文件列表
    return api.get('api/files');
  },
};
export default file;

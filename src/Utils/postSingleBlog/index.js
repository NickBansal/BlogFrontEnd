import axios from 'axios';

const URL = 'https://backendblog.herokuapp.com/blogs';

export default async (blog, progressBar) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL}/`,
    data: blog,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
    onUploadProgress: (progressEvent) => {
      const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
      if (totalLength !== null) {
        const progressData = Math.round((progressEvent.loaded * 100) / totalLength);
        progressBar(progressData);
      }
    },
  });
  return data;
};

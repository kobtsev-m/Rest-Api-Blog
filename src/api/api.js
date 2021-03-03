// Axios & utils
import * as axios from 'axios';
import * as utils from './utils';

// Base API
export const baseApi = axios.create({
  baseURL: 'https://infinite-hamlet-30732.herokuapp.com/api/',
  headers: {
    'Content-type': 'application/json'
  }
});

export const postsApi = {
  getPosts() {
    return baseApi.get('posts/').then((response) => response.data);
  },
  getPost(postId) {
    return baseApi.get(`posts/${postId}`).then((response) => response.data);
  },
  getSelectFieldsOptions(fieldNames) {
    return baseApi
      .options('posts/')
      .then((response) =>
        utils.reduceSelectFields(response.data.actions.POST, fieldNames)
      );
  },
  createPost(values, options) {
    const parsedValues = utils.parseSelectFieldsData(values, options);
    const formData = utils.toFormData(parsedValues);
    return baseApi.post('posts/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  deletePost(postId) {
    return baseApi.delete(`posts/${postId}`);
  }
};

export const categoriesApi = {
  getCategories() {
    return baseApi.get('categories/');
  }
};

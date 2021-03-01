// Axios & utils
import * as axios from 'axios';
import * as utils from './utils';

// Base API
const baseApi = axios.create({
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
  getSelectFieldsOptions() {
    return baseApi
      .options('posts/')
      .then((response) =>
        utils.reduceSelectFields(response.data.actions.POST)
      );
  },
  getMany2ManyFieldsOptions() {
    return baseApi
      .get('categories/')
      .then((response) => utils.reduceMany2ManyFields(response.data));
  },
  createPost(values, options) {
    let parsedValues = utils.parseSelectFieldsData(values, options);
    let formData = new FormData();
    for (let [key, value] of Object.entries(parsedValues)) {
      if (typeof value === 'object') {
        for (let item of value) {
          formData.append(key, item);
        }
      } else {
        formData.append(key, value);
      }
    }
    console.log(formData);
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
